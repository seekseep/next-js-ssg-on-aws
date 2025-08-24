#!/usr/bin/env ts-node
import * as cdk from 'aws-cdk-lib'
import { StaticSiteStack } from '../lib/static-site-stack'

const app = new cdk.App()

new StaticSiteStack(app, 'StaticSiteStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'ap-northeast-1' }
})
