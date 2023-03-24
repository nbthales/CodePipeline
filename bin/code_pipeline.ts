#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline/pipeline-stack';

const app = new cdk.App();

new PipelineStack(app, 'dev-pipeline-stack', {
  branch: 'dev',
  awsRegion: 'us-east-1',
  awsAccount: '869397599638',

  env: {
    account: '670951049310',
    region: 'us-east-1',
  },
});

app.synth();
// cdk bootstrap --trust 670951049310 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://869397599638/us-east-1
