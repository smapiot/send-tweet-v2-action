const core = require('@actions/core');
const github = require('@actions/github');
const { TwitterApi } = require('twitter-api-v2');

async function runAction() {
  console.log(`Triggered action: ${github.context.action}`);

  const status = core.getInput('status');
  const appKey = core.getInput('consumer-key');
  const appSecret = core.getInput('consumer-secret');
  const accessToken = core.getInput('access-token');
  const accessSecret = core.getInput('access-token-secret');

  const twitterClient = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
  });

  try {
    const res = await twitterClient.v2.tweet(status);
    core.setOutput('id', res.data.id);
    return process.exit(0);
  } catch (err) {
    core.setFailed(err);
    return process.exit(1);
  }
}

runAction();
