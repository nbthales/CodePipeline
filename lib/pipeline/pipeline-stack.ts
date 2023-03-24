import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { ApplicationStage } from './application-stage';

interface PipelineStackProps extends cdk.StackProps {
  branch: string;
  awsAccount: string;
  awsRegion: string;
}

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, `pipeline-${props.branch}`, {
      pipelineName: `pipeline-${props.branch}`,
      dockerEnabledForSynth: true,
      crossAccountKeys: true,
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('nbthales/CodePipeline', props.branch),
        installCommands: ['npm i -g npm@latest'],
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });

    const applicationStage = new ApplicationStage(this, `${props.branch}-stage`, {
      branch: props.branch,
      env: {
        account: props.awsAccount,
        region: props.awsRegion,
      },
    });
    pipeline.addStage(applicationStage);
  }
}
