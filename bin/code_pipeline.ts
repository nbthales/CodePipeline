#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline/pipeline-stack';

const app = new cdk.App();

new PipelineStack(app, 'CognitoDevPipelineStack', {
  //DEV account
  branch: 'dev',
  awsRegion: 'us-east-1',
  awsAccount: '',

  env: {
    account: '',
    region: 'us-east-1',
  },
});

new PipelineStack(app, 'CognitoProdPipelineStack', {
  //PROD account
  branch: 'prod',
  awsRegion: 'us-east-1',
  awsAccount: '',

  env: {
    account: '',
    region: 'us-east-1',
  },
});

app.synth();

// cdk bootstrap --trust <awsAccountAdmin> --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://<awsAccountPipeline>/us-east-1
