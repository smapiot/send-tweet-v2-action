# Send Tweet v2 Action

This GitHub action publishes a Twitter Post (tweet) using the Twitter v2 API.

## Inputs

### `status`

**Required** The content of the tweet to send.

### `consumer-key`

**Required** The API key to use. Most feed services will require an API key.

### `consumer-secret`

**Required** The base directory relative to the project root.

### `access-token`

**Required** The bundler to use if nothing is specified in the code.

### `access-token-secret`

**Required** The bundler to use if nothing is specified in the code.

## Outputs

### `id`

The ID of the created tweet.

## Example Usage

The simplified usage looks like:

```yaml
uses: smapiot/send-tweet-v2-action@v2
with:
  status: 'Hi Mum!'
  consumer-key: 'abcdef1234567890'
  consumer-secret: 'abcdef1234567890'
  access-token: '1234gvjgejge-AnLgeogegeq'
  access-token-secret: 'abQA225353mfk53'
```

A complete example could thus look as follows:

```yaml
on:
  push:
    branches:
      - main

jobs:
  publish-pilet:
    name: Send Tweet
    runs-on: [ubuntu-16.04]
    steps:
    - name: Tweet
      uses: smapiot/send-tweet-v2-action@v2
      with:
        status: 'Hi Mum!'
        consumer-key: ${{ secrets.CONSUMER_KEY }}
        consumer-secret: ${{ secrets.CONSUMER_SECRET }}
        access-token: ${{ secrets.ACCESS_TOKEN }}
        access-token-secret: ${{ secrets.ACCESS_TOKEN_SECRET }}
```
