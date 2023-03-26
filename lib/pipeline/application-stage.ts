import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DdbStack } from '../stacks/ddb-stack';

interface ApplicationStageProps extends cdk.StageProps {
  branch: string;
}

export class ApplicationStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: ApplicationStageProps) {
    super(scope, id, props);

    const tags = {
      ['cost']: 'CodePipeline',
      ['team']: 'nbthales',
    };

    //Application stacks
    const ddbStack = new DdbStack(this, 'ddb-application-stack', {
      tags: tags,
    });
  }
}
