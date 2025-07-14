import { execSync } from 'child_process'

const webhookUrl = process.env.DISCORD_WEBHOOK_URL

const getGitInfo = () => {
  try {
    const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
    const commitMessage = execSync('git log -1 --pretty=%B').toString().trim()
    const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    const author = execSync('git log -1 --pretty=%an').toString().trim()
    return { commitHash, commitMessage, branchName, author }
  } catch (error) {
    console.error('Error getting git info:', error)
    return { commitHash: 'N/A', commitMessage: 'N/A', branchName: 'N/A', author: 'N/A' }
  }
}

const sendDiscordNotification = async (embed: object) => {
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set')
    return
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    })

    if (!response.ok) {
      console.error('Failed to send Discord notification:', await response.text())
    }
  } catch (error) {
    console.error('Error sending Discord notification:', error)
  }
}

export const sendDeploymentStartedNotification = async () => {
  const { commitHash, commitMessage, branchName, author } = getGitInfo()
  const embed = {
    title: '🚀 Deployment Started',
    description: `A new deployment has been initiated on Vercel.`,
    color: 0x3498db, // Blue
    fields: [
      { name: 'Branch', value: branchName, inline: true },
      { name: 'Commit', value: `[${commitHash}](<https://github.com/kei9o/nextjs-portfolio-blog/commit/>${commitHash})`, inline: true },
      { name: 'Author', value: author, inline: true },
      { name: 'Commit Message', value: commitMessage },
    ],
    timestamp: new Date().toISOString(),
  }
  await sendDiscordNotification(embed)
}

export const sendDeploymentSuccessNotification = async () => {
  const { commitHash, commitMessage, branchName, author } = getGitInfo()
  const embed = {
    title: '✅ Deployment Successful',
    description: `The deployment has completed successfully.`,
    color: 0x2ecc71, // Green
    fields: [
      { name: 'Branch', value: branchName, inline: true },
      { name: 'Commit', value: `[${commitHash}](<https://github.com/kei9o/nextjs-portfolio-blog/commit/>${commitHash})`, inline: true },
      { name: 'Author', value: author, inline: true },
      { name: 'Commit Message', value: commitMessage },
    ],
    timestamp: new Date().toISOString(),
  }
  await sendDiscordNotification(embed)
}

export const sendDeploymentFailureNotification = async () => {
  const { commitHash, commitMessage, branchName, author } = getGitInfo()
  const embed = {
    title: '❌ Deployment Failed',
    description: `The deployment has failed.`,
    color: 0xe74c3c, // Red
    fields: [
      { name: 'Branch', value: branchName, inline: true },
      { name: 'Commit', value: `[${commitHash}](<https://github.com/kei9o/nextjs-portfolio-blog/commit/>${commitHash})`, inline: true },
      { name: 'Author', value: author, inline: true },
      { name: 'Commit Message', value: commitMessage },
    ],
    timestamp: new Date().toISOString(),
  }
  await sendDiscordNotification(embed)
}

export const sendNewBlogPostNotification = async (post: { title: string; excerpt: string; slug: string }) => {
  const embed = {
    title: '🎉 New Blog Post Published',
    description: `A new blog post has been published.`,
    color: 0xf1c40f, // Yellow
    fields: [
      { name: 'Title', value: post.title },
      { name: 'Excerpt', value: post.excerpt },
      { name: 'Link', value: `[Read more](<https://portfolio.kei9o.dev/blog/>${post.slug})` },
    ],
    timestamp: new Date().toISOString(),
  }
  await sendDiscordNotification(embed)
}
