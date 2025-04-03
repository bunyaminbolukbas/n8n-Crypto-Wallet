// eslint-disable-next-line n8n-nodes-base/node-filename-against-convention
import { INodeType, INodeTypeDescription  } from 'n8n-workflow';

import { 	LoggerProxy as Logger } from 'n8n-workflow';

// Info-level logging of a trigger function, with workflow name and workflow ID as additional metadata properties

Logger.info(`Polling trigger initiated for workflow "${Email.trigger.Workflow}"`, {workflowName: workflow.name, workflowId: workflow.id});

// Verbose-level logging of hook function execution, with execution ID, workflow ID, and session ID as metadata properties

Logger.verbose(`Executing hook (workflowExecuteBefore, hookFunctionsPush)`, {executionId: this.executionId, workflowId: this.workflowData.id, sessionId: this.sessionId});

import winston from 'winston';

export class CryptoWalletBalance implements INodeType {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'app.log' })
            ]
        });
    }

    description: INodeTypeDescription = {
        // Basic node details
        displayName: 'Crypto Wallet Balance',
        name: 'CryptoWalletBalance',
        icon: 'file:Cryptowalleticon.svg', // 64x64 .svg file,
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["address"]}}', /// zonder dit werkt de code niet
        description: 'Get the balance of a crypto wallet from Etherscan',
        defaults: {
            name: 'Crypto Wallet Balance',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                // eslint-disable-next-line n8n-nodes-base/node-class-description-credentials-name-unsuffixed
                name: 'CryptoWalletBalance',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.etherscan.io/api',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Get Wallet Balance',
                        value: 'getBalance',
                        action: 'Get the balance of a crypto wallet',
                        description: 'Retrieve the balance of a crypto wallet',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/?module=account&action=balance',
                            },
                        },
                    },
                ],
                default: 'getBalance',
            },
            {
                displayName: 'Wallet Address',
                description: 'Crypto wallet address, example: 0x07359d76AC5F100b20e3Bf612580b8779f37faf8', /// prive wallet, mogelijk eruit halen
                required: true,
                name: 'address',
                type: 'string',
                default: '',
                displayOptions: {
                    show: {
                        operation: [
                            'getBalance',
                        ],
                    },
                },
                routing: {
                    request: {
                        qs: {
                            address: '={{$parameter["address"]}}',
                            tag: 'latest',
                            apikey: 'UED5HF4SPFW18AIJE3YBZZW85WFCARUHDZ', // Dit is een prive API sleutel uit het Etherscan account van Bunyamin
                        },
                    },
                },
            },
        ],
		};
			async execute() {
					try {
							// Simulatie van actie - vervang dit met je echte actie
							const result = await this.performAction();
							this.logger.info('Actie uitgevoerd', { result });

							//toevoegen van n8n logger
							this.logger.info('Actie uitgevoerd', { result });

							return result;
					} catch (error) {
							this.logger.error('Fout bij uitvoeren van actie', { error });

							throw error;
					}
			}

			async performAction() {
					// Simulatie van actie - vervang dit met je echte actie
					const result = await someAction(); // Vervang someAction() met je daadwerkelijke actie
					return result;
			}

			async anotherMethod() {
					// Doe iets...

					// Log naar bestand
					this.logger.info('Iets anders gelogd');
			}
	}
{

}
