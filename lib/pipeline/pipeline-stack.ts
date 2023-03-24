import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

interface PipelineStackProps extends cdk.StackProps {
  branch: string;
  awsAccount: string;
  awsRegion: string;
}

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: PipelineStackProps) {
    super(scope, id, props);
  }
}
