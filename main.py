import json
import boto3

def lambda_handler(event, context):
    cloudfront = boto3.client('cloudfront')
    distribution_id = 'YOUR_CLOUDFRONT_DISTRIBUTION_ID'
    
    response = cloudfront.create_invalidation(
        DistributionId=distribution_id,
        InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': ['/*']
            },
            'CallerReference': str(context.aws_request_id)
        }
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps('Invalidation created successfully!')
    }