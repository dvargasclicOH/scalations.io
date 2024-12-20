import React, { Component } from 'react';
import _ from 'lodash';
import './styles.css';

const forms = [
    {
        form: 'Operaciones',
        teamsAuthorized: ['id'],
    },
    {
        form: 'Supply',
        teamsAuthorized: ['id'],
    },
];

const context = {
    conversation: { id: '12345' },
    customer: {
        id: '54321',
        attributes: { emails: ['customer@example.com'] },
    },
};

const currentUser = {
    teams: [{ id: 'id' }],
    email: 'agent@example.com',
};

const conversation = {
    custom: {
        guiaStr: 'guia123',
        conversationIdStr: 'conv123',
    },
    channels: 'whatsapp',
};

class Scalations extends Component {
    constructor(props) {
        super(props);
        const { context, currentUser, conversationExt } = props;
        this.state = {
            conversationId: _.get(context.conversation, 'id'),
            agentEmail: _.get(currentUser, 'email'),
            channels: _.get(conversation, 'channels'),
            idGuia: _.get(conversation.custom, 'guiaStr'),
            customerId: _.get(context.customer, 'id'),
            userEmail: _.get(context.customer.attributes.emails[0], 'email'),
            conversationSecundary: _.get(conversation.custom, 'conversationIdStr'),
            form: null,
            success: false,
            submitting: false,
            error: false,
            idRuta: null,
            attachments: [],
            queueSS: null,
            scalationType: null,
            scalationReason: null,
            scalationReasonId: null,
            slaMessage: null,
            sla: null,
            description: null,
            asuntoEmail: null,
            scalatedConversationMessages: null,
            scalatedConversation: null,
            dateRetry: null,
            date: null,
            dateCortePago: null,
            dateInicioAdeuda: null,
            dateFinAdeuda: null,
            dateInicioDescuentos: null,
            dateFinDescuentos: null,
            guideStatus: null,
            aliadoName: null,
            city: null,
            aliadoIdentification: null,
            bonusAmount: null,
            amountHours: null,
            opnAliado: null,
            opCiudad: null,
            numCelularCuenta: null,
            entidad: null,
            conceptoFaltante: null,
            falla: null,
            cuentaBancaria: null,
            razonFacturacion: null,
            montoRecarga: null,
            scalationRazonFacturacion: null,
            montoFactura: null,
            tipoFacturacion: null,
            montoDevolver: null,
            dateCreateMarca: null,
            dateRetiroMarca: null,
            responsableFact: null,
            brandTienda: null,
            address: null,
            destnrioName: null,
            numContact: null,
            idAliado: null,
            nombreProducto: null,
            idOrden: null,
            codProducto: null,
            allyCertify: null,
            tipoCambio: null,
            nuevosDatos: null,
            country: null,
            idclicOH: null,
            inventarioMarca: null,
            typeNovedad: null,
            guiaMiPaquete: null,
            guiaTercero: null,
            transportadora: null,

        };
    }

    handleChange = (field, value) => {
        this.setState({ [field]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario enviado: ' + JSON.stringify(this.state));
    };

    includesTeam = () => {
        const teams = _.get(currentUser, 'teams', []).map((team) => team.id);
        return forms
            .filter((form) => form.teamsAuthorized.some((auth) => teams.includes(auth)))
            .map((form) => (
                <option key={form.form} value={form.form}>
                    {form.form}
                </option>
            ));
    };

    componentDidMount() {

        const {
            conversationSecundary
        } = this.state;
        if (this.state.scalatedConversation === null) {
            let scalated = conversationSecundary
            let options = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}/messages?page=1&pageSize=1000&sort=desc`, options)
                .then((response) => {
                    return response.json();
                })
                .then((messages) => {
                    this.setState({ scalatedConversationMessages: messages.data });
                });
            let options2 = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}`, options2)
                .then((response) => {
                    return response.json();
                })
                .then((conversation) => {
                    this.setState({ scalatedConversation: conversation.data });
                });
        };


    }

    async componentWillMount() {
        const {
            conversationSecundary
        } = this.state;
        if (this.state.scalatedConversation === null) {
            let scalated = conversationSecundary
            let options = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}/messages?page=1&pageSize=1000&sort=desc`, options)
                .then((response) => {
                    return response.json();
                })
                .then((messages) => {
                    this.setState({ scalatedConversationMessages: messages.data });
                });
            let options2 = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}`, options2)
                .then((response) => {
                    return response.json();
                })
                .then((conversation) => {
                    this.setState({ scalatedConversation: conversation.data });
                });
        };
    }

    setField(field, val) {
        if (field === "attachments") {
            let attachmentsArray = this.state.attachments;//Obtiene los archivos subidos al oprimir "adjunto" en el form
            // Refuerza el tipo MIME solo si el archivo es .xlsx
            if (val.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                const blob = new Blob([val], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                const file = new File([blob], val.name, { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                attachmentsArray.push(file); // Guarda el archivo reforzado
            } else {
                attachmentsArray.push(val); // Guarda otros tipos de archivo sin cambios
            }
            console.log("Estado de attachments actualizado:", attachmentsArray);
            this.setState({ attachments: attachmentsArray });//actualiza el estado
        } else {
            this.setState({ [field]: val });
        }
    };

    removeAttachmentFile(fileName) {
        let updatedAttachments = this.state.attachments;
        updatedAttachments.forEach((file, index) => {
            if (file.name === fileName) {
                updatedAttachments.splice(index, 1);
                return this.setState({ attachments: updatedAttachments });
            };
        });
    };

    includesTeam() {
        let opciones = forms.map(form => form.teamsAuthorized.map(el => teams.includes(el) ? form.form : null)).reduce((a, b) => a.concat(b)).filter(el => el != null);
        let values = opciones.map(el => el);
        let formularios = opciones.filter((el, i) => i === values.indexOf(el)); return formularios.map(el => <option value={el}>{el}</option>)
    };

    typingMessage(sla, unit, value) {
        let message = null;
        if (unit === "h" && sla === "1-h") {
            if (this.state.channels === "whatsapp" || this.state.channels === "chat" || this.state.channels === "email") {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} hora hábil por este medio.`;
                return this.setField("slaMessage", message);
            } else {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                return (
                    this.setField("asuntoEmail", value),
                    this.setField("slaMessage", message));
            }
        } else if (unit === "m") {
            if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas por este medio.`;
                return this.setField("slaMessage", message);
            } else {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas por este medio.`;
                return (
                    this.setField("asuntoEmail", value),
                    this.setField("slaMessage", message));
            }
        } else if (unit === "no") {
            if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                /*Case "Interno CS"*/
            }
        } else {
            if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                return this.setField("slaMessage", message);
            } else {
                message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                return (
                    this.setField("asuntoEmail", value),
                    this.setField("slaMessage", message));
            }
        }
    };

    ajax(data, type) {
        let url = null
        if (type === "messageWithAttachments") {
            url = "https://api.kustomerapp.com/v1/hooks/form/6185671c5c8df47cc3f6917b/fcb370ba87c773dfc4e690d3e71d2d98de41eb4f9e3c69802b21df50f9c8b386"
        } else {
            url = "https://api.kustomerapp.com/v1/hooks/form/6185671c5c8df47cc3f6917b/e4c190e3ba517f4358856262c687e567752a0163131e9a2f9d8198da845d180f"
        }
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("POST", url);
            request.onreadystatechange = () => {
                if (request.status >= 200 && request.status < 400) {
                    return resolve();
                };
                return reject(request.responseText);
            };
            request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            let formData = new FormData();//Crea el objeto para manejar datos del formulario
            data.map(prop => formData.append(Object.keys(prop)[0], Object.values(prop)[0]));
            this.state.attachments.map(attachment => formData.append("attachments", attachment));//Los archivos se agregan en el formData
            request.send(formData);
        });
    };

    async renderChat(id) {
        const { scalatedConversation } = this.state;
        if (scalatedConversation === null) {
            let scalated = id
            let options = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}/messages?page=1&pageSize=1000&sort=desc`, options)
                .then((response) => {
                    return response.json();
                })
                .then((messages) => {
                    this.setState({ scalatedConversationMessages: messages.data });
                });
            let options2 = {
                "method": "GET",
                "headers": {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDhhZGFiMTQ0OWJmYWIyNmJlZjAxMyIsInVzZXIiOiI2MWQ4YWRhYTliOTQ4NGY3ODA3NGU5ZTEiLCJvcmciOiI2MTg1NjcxYzVjOGRmNDdjYzNmNjkxN2IiLCJvcmdOYW1lIjoibG9neXN0byIsInVzZXJUeXBlIjoibWFjaGluZSIsInBvZCI6InByb2QxIiwicm9sZXMiOlsib3JnLnBlcm1pc3Npb24uY29udmVyc2F0aW9uLnJlYWQiLCJvcmcucGVybWlzc2lvbi5tZXNzYWdlLnJlYWQiXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjYxZDhhZGFhOWI5NDg0Zjc4MDc0ZTllMSJ9.xNtaaqrdqPZKKuAmKTKAQFxH4f1LaXDwPmHqsCK3ZHk",
                    "content-type": "application/json"
                }
            };
            fetch(`https://api.kustomerapp.com/v1/conversations/${scalated}`, options2)
                .then((response) => {
                    return response.json();
                })
                .then((conversation) => {
                    this.setState({ scalatedConversation: conversation.data });
                });
            this.setField("submitting", false)
        };
    };

    async sendMessage() {
        const {
            customerId,
            userEmail,
            messageDirection,
            agentEmail
        } = this.state;
        let scalated = this.state.conversationSecundary;
        if (document.getElementById("bodyMessage").value.length > 10) {
            this.setField("submitting", true);
            let data = [
                { "type": "messageByChat" },
                { "IdConvo": scalated },
                { "conversationId": scalated },
                { "IdCustomer": customerId },
                { "preview": `Redacted by: ${agentEmail}\nComment: ${document.getElementById("bodyMessage").value}` },
                { "direction": messageDirection },
                { "To": userEmail }
            ];

            await this.ajax(data, "messageWithAttachments");
            this.setState({ scalatedConversationMessages: null });
            this.setState({ scalatedConversation: null });
            this.state.attachments = [];
            setTimeout(() => {
                this.renderChat(scalated);
            }, 2000);
        } else {
            alert("Digita más de 10 caracteres");
        };
    };

    async handleSubmit(e) {
        e.preventDefault();
        const {
            conversationId,
            agentEmail,
            form,
            success,
            submitting,
            userEmail,
            error,
            scalationReasonId,
            idGuia,
            idRuta,
            sla,
            channels,
            queueSS,
            asuntoEmail,
            scalationType,
            scalationReason,
            customerId,
            slaMessage,
            date,
            dateCortePago,
            dateInicioAdeuda,
            dateFinAdeuda,
            dateInicioDescuentos,
            dateFinDescuentos,
            description,
            aliadoName,
            city,
            aliadoIdentification,
            bonusAmount,
            amountHours,
            opnAliado,
            opCiudad,
            numCelularCuenta,
            entidad,
            conceptoFaltante,
            falla,
            cuentaBancaria,
            montoRecarga,
            scalationRazonFacturacion,
            montoFactura,
            tipoFacturacion,
            montoDevolver,
            razonFacturacion,
            dateCreateMarca,
            dateRetiroMarca,
            responsableFact,
            guideStatus,
            brandTienda,
            address,
            destnrioName,
            numContact,
            idAliado,
            nombreProducto,
            idOrden,
            codProducto,
            allyCertify,
            tipoCambio,
            nuevosDatos,
            country,
            idclicOH,
            numFactura,
            inventarioMarca,
            typeNovedad,
            guiaMiPaquete,
            guiaTercero,
            transportadora

        } = this.state;
        this.setState({ submitting: true });

        let payload = null;
        let interNote = "";
        let ipMiPaquete = "661fe235ae6b5d7342114c37";
        const countryMapping = { "ar": { ipFinanciero: "650c5999f8ee2e8eba617f14", ipOperaciones: "65134fb09878826ebc26f957", ipSupply: "6515849ac448e214cb324a10", ipDarkstore: "651ac25cd5b4782bbb89dc3d", ipControlTower: "644a84647c971b052f5ec4c0", ipPayAliado: "663a2d738a866000108e4476" }, "cl": { ipFinanciero: "6617ed43b99a25438f3d7af0", ipOperaciones: "6617ed922ff4c23d93e22fc4", ipSupply: "6617edcf7b51896099a1f650", ipDarkstore: "6617ee250e4010144d4cf00c", ipControlTower: "6617ee532ff4c27569e26dd2", ipPayAliado: "663a2d8de77f1c0b03ba40df" }, "co": { ipFinanciero: "61f0b6a1aaa4ca50fe2a0d4a", ipOperaciones: "61d8d530d43660c0bcd90b5f", ipSupply: "61f1d5572ed72538c92d08a2", ipDarkstore: "62dea53ea7b40941885083c9", ipControlTower: "651ada0b5b9d9934b533d6d6", ipPayAliado: "61f0b6ce1410dec09d41ec12" }, "mx": { ipFinanciero: "650c47243d8c6ed5c31fde5b", ipOperaciones: "65134f81b37630b132b4fb94", ipSupply: "65158504e8992c16bf0d9099", ipDarkstore: "651ac29685f0a10fce9b6bac", ipControlTower: "651ada319dee6845e9acd9b4", ipPayAliado: "663a2da08a86607e928e4baf" } };
        const teamsMapping = { "ar": { financieroSS: "650c93af2d1727cec52eb9a3", operacionesSS: "6513515312efddf0f72c7284", supplySS: "6515854f315a1e24b0973fbf", darkstoreSS: "651ac2c095382b6474520f71", controlTowerSS: "6446d63f94d8bb8614e4edd4", pagoAliadoSS: "663a2eec30a13072a440ce3c" }, "cl": { financieroSS: "6617efecfce5507fafa959b1", operacionesSS: "6617efff563e4a87f6968e2a", supplySS: "6617f0157990cc726aabcca7", darkstoreSS: "6617f029f66992b254e4f80f", controlTowerSS: "6617f03a1f111dc427e00209", pagoAliadoSS: "663a2ef9bba853bcb5619998" }, "co": { financieroSS: "61f1d7924375a47e0b1fd0a8", operacionesSS: "61cb4af100fc8922d58ab5f4", supplySS: "61f1d70e55b875c599adecb0", darkstoreSS: "620163aa5c7c867a90f6b7b7", controlTowerSS: "651ada4e8b3d9d395dffbdf7", pagoAliadoSS: "61eeb4d95e01c90c73c68b68" }, "mx": { financieroSS: "650c93d7aac04be41b71614a", operacionesSS: "64c7d669461e0529fd416289", supplySS: "6515856b8c2044237789c18e", darkstoreSS: "651ac2dd6d5ca15b54a4d2d4", controlTowerSS: "651ada55aae9cb54ecf78bd4", pagoAliadoSS: "663a2f00e2688867340d696f" } };
        const getCountry = this.state.country;
        const interProfile = countryMapping[getCountry] && this.state.form === "Financiero" ? countryMapping[getCountry].ipFinanciero : countryMapping[getCountry] && this.state.form === "Operaciones" ? countryMapping[getCountry].ipOperaciones : countryMapping[getCountry] && this.state.form === "Supply" ? countryMapping[getCountry].ipSupply : countryMapping[getCountry] && this.state.form === "Darkstore" ? countryMapping[getCountry].ipDarkstore : countryMapping[getCountry] && this.state.form === "Control Tower" ? countryMapping[getCountry].ipControlTower : countryMapping[getCountry] && this.state.form === "Pago Aliados" ? countryMapping[getCountry].ipPayAliado : "else";
        const teamSS = this.state.form === "Financiero" && countryMapping[getCountry] ? teamsMapping[getCountry].financieroSS : this.state.form === "Operaciones" && countryMapping[getCountry] ? teamsMapping[getCountry].operacionesSS : this.state.form === "Supply" && countryMapping[getCountry] ? teamsMapping[getCountry].supplySS : this.state.form === "Darkstore" && countryMapping[getCountry] ? teamsMapping[getCountry].darkstoreSS : this.state.form === "Control Tower" && countryMapping[getCountry] ? teamsMapping[getCountry].controlTowerSS : this.state.form === "Pago Aliados" && countryMapping[getCountry] ? teamsMapping[getCountry].pagoAliadoSS : "else";
        /*Operaciones*/
        if (this.state.scalationReasonId === "operations.confirmacion_trazabilidad_real" || this.state.scalationReasonId === "operations.confirmacion_paquete_extraviado_bodega" || this.state.scalationReasonId === "operations.demora_colecta" || this.state.scalationReasonId === "operations.aliado_no_paso_a_retirar_paquete" || this.state.scalationReasonId === "operations.paquete_en_transito_") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "operations.confirmacion_ingreso_clicoh_primeraMilla") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nFecha del estado validado: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "operations.demoras_despacho") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nFecha ingreso al HUB: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }
        /*Control Tower*/
        else if (this.state.scalationReasonId === "controlTower.paquete_en_transito") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nNombre del aliado: ${aliadoName}\nGuía Id: ${idGuia}\nCiudad: ${ciudad}\nFecha de estado en tránsito: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.paquete_retornando") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nNombre del aliado: ${aliadoName}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de estado en retornando: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.asignar_aliado" || this.state.scalationReasonId === "controlTower.demora_recoleccion_aliado_no_contesta") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.demoraSLA_distribucion_propia" || this.state.scalationReasonId === "controlTower.desconocimientoEntrega_visitaFallida" || this.state.scalationReasonId === "controlTower.solicitud_inversa" || this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucionWH_HUBclicOH") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.novedades_transporte_nacional" && this.state.typeNovedad === "Desconocimiento de entrega" || this.state.typeNovedad === "Llegó algo diferente a lo que compro" || this.state.typeNovedad === "Llegó el paquete en mal estado" || this.state.typeNovedad === "Novedades Nacionales") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nTipo de Novedad: ${typeNovedad}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nId Guía MiPaquete: ${guiaMiPaquete}\nCiudad: ${ciudad}\nId Guía Transportadora: ${guiaTercero}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId, interProfile = ipMiPaquete
        } else if (this.state.scalationReasonId === "controlTower.novedades_transporte_nacional") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nTipo de Novedad: ${typeNovedad}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.retraso_salida_segundos_intentos") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de marcación del reintento: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucion_cedi" || this.state.scalationReasonId === "controlTower.retraso_devolucion_cedi") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de solicitud de devolución a CEDI: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Supply*/
        else if (this.state.scalationReasonId === "supply.bonificaciones") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nId de la ruta: ${idRuta}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nMonto del bono: ${bonusAmount}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nCantidad de horas que se adeudan: ${amountHours}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nOperación a la que pertenece el aliado: ${opnAliado}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "supply.cambios_documentosDatosVehiculo_aliado") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "supply.asignar_aliado1" || this.state.scalationReasonId === "supply.demora_recoleccion_aliado_no_contesta1") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Pagos*/
        else if (this.state.scalationReasonId === "pagos.falla_actualizacion_datos_pagos") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFalla presentada: ${falla}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "pagos.aliado_sin_pago") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "pagos.aliado_pago_incompleto") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nConcepto faltante: ${conceptoFaltante}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "pagos.descuentos_no_aplican_no_autorizados") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo de los descuentos: ${dateInicioDescuentos}\nFecha fin del periodo de los descuentos: ${dateFinDescuentos}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "pagos.problemas_recaudos") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nId Guía: ${idGuia}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "pagos.solicitud_certificados") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${customerId}\nCertificado: ${allyCertify}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Financiero*/
        else if (this.state.scalationReasonId === "financiero_marcas.fallas_recargas_clientes_paqueteria") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nMonto recargado: ${montoRecarga}\nFecha de recarga: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nRazón de facturación: ${razonFacturacion}\nNombre de aliado: ${aliadoName}\nID de aliado: ${idAliado}\nMonto de la factura: ${montoFactura}\nResponsable de la facturación: ${responsableFact}\nTipo de Refacturación: ${tipoFacturacion}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "financiero_marcas.demora_proceso_refacturacion_siniestros") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nRazón de facturación: ${razonFacturacion}\nNombre de aliado: ${aliadoName}\nID de aliado: ${idAliado}\nMonto de la factura: ${montoFactura}\nResponsable de la facturación: ${responsableFact}\nTipo de Refacturación: ${tipoFacturacion}\nFecha de escalamiento inicial: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_cierre_operacion") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nEntidad: ${entidad}\nMonto a devolver: ${montoDevolver}\nFecha de creación de la marca: ${dateCreateMarca}\nFecha de retiro de la marca: ${dateRetiroMarca}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_factura" || this.state.scalationReasonId === "financiero_marcas.solicitud_estado_cuenta" || this.state.scalationReasonId === "financiero_marcas.solicitud_facturas_pendientes" || this.state.scalationReasonId === "financiero_marcas.actualizar_correo_facturacion") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nMes de factura solicitada: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "financiero_marcas.problemas_factura_talles" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_tarifas" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_bono" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_descuentos" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_deuda" || this.state.scalationReasonId === "financiero_marcas.confirmacion_soporte_pago") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nNúmero de Factura: ${numFactura}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Interno CS*/
        else if (this.state.scalationReasonId === "interno_cs.problemas_recoleccion_producto_no_disponible") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nTienda: ${brandTienda}\nNombre del aliado: ${aliadoName}\nId Guía: ${idGuia}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "interno_cs.novedades_entrega_segundos_intentos") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía: ${idGuia}\nDirección actualizada + Complemento: ${address}\nNombre del destinatario: ${destnrioName}\nTeléfono destinatario: ${numContact}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "interno_cs.reconocimientos") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía / orden: ${idGuia}\nCiudad: ${city}\nDirección de entrega: ${address}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "interno_cs.refacturacion") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía / orden: ${idGuia}\nCiudad: ${city}\nCausa: ${falla}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Darkstore*/
        else if (this.state.scalationReasonId === "darkstore.solicitud_creacion_servicio_demora_despacho" || this.state.scalationReasonId === "darkstore.cancelar_alistamiento_guia_no_creada" || this.state.scalationReasonId === "darkstore.solicitud_relacion_serial_orden" || this.state.scalationReasonId === "darkstore.actualizacion_fulfilment") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nCiudad de la darkstore: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.demora_status_picking_de_orden" || this.state.scalationReasonId === "darkstore.troque_alistamiento") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.producto_extraviado_averiado_en_darkstore") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nNombre de producto: ${nombreProducto}\nCódigo referencia principal del producto: ${codProducto}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.notificacion_confirmacion_abastecimiento") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.devolucion_a_darkstore") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nNombre del aliado: ${aliadoName}\nCedula del aliado: ${aliadoIdentification}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.solicitud_conciliacion_inventario") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nUnidades en las que se presenta diferencias: ${nuevosDatos}\nCiudad: ${city}\nNombre del WMS: ${nombreProducto}\nInventario enviado por la marca: ${inventarioMarca}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.demorasDespacho_procesamientoCampañas") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de la campaña: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.creacion_campañas") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.recepcion_abastecimiento_campañas") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de envío de abastecimiento: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        } else if (this.state.scalationReasonId === "darkstore.recoleccion_productos_campañas") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de recolección: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Customer Service*/
        else if (this.state.scalationReasonId === "customer_service.confirmacion_direccion_entrega") {
            interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nId Guía/orden: ${idGuia}\nNombre del Destinatario: ${destnrioName}\nTelefono destinatario: ${numContact}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId
        }/*Supply*/
        if (form === "Supply") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia }, { "idRuta": idRuta },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "aliados@support.clicoh.com" },
                { "interNote": interNote },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } /*Operaciones*/
        else if (form === "Operaciones") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } else if (form === "Pago Aliados") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "brandName": brandName },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote },
                { "aliadoName": aliadoName },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } else if (form === "Financiero") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote },
                { "aliadoName": aliadoName },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } else if (form === "Interno CS") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "brandName": brandName },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": "624b68cf77879b021f089b58" },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote }
            ]
        } else if (form === "Darkstore") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } else if (form === "Customer Service") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idRuta": idRuta },
                { "brandName": brandName },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": "62fe4374ed38020f05ad6752" },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote }
            ]
        } else if (form === "Control Tower") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idclicOH": idclicOH },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": interProfile },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": interNote },
                { "country": country },
                { "teamSS": teamSS }
            ]
        } else if (form === "Operaciones MP") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idclicOH": idclicOH },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": "66df6ab011fda41b2b4accc8" },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID Guía: ${idGuia}\nID MiPaquete: ${guiaMiPaquete}\nTransportadora: ${transportadora}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId },
                { "country": country },
                { "teamSS": "66e041ffca4bc54724b39f2f" },
                { "miPaquete": "clientes@support.mipaquete.com" }
            ]
        } else if (form === "Financiero MP") {
            payload = [
                { "queue": queueSS },
                { "channels": channels },
                { "customerId": customerId },
                { "agentEmail": agentEmail },
                { "origin": scalationType },
                { "conversationId": conversationId },
                { "tags": ["61d5e7295d44c9faff6e7b28"] },
                { "idGuia": idGuia },
                { "idclicOH": idclicOH },
                { "marca": marca },
                { "form": form },
                { "scalationReason": scalationReason },
                { "slaMessage": slaMessage },
                { "scalationReasonId": scalationReasonId },
                { "sla": sla },
                { "conversationName": scalationReason },
                { "asuntoEmail": asuntoEmail },
                { "userEmail": userEmail },
                { "interProfile": "66e305e133d5fa3c874f7e93" },
                { "fromPostmark": "clientes@support.clicoh.com" },
                { "interNote": `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID Guía: ${idGuia}\nID MiPaquete: ${guiaMiPaquete}\nTransportadora: ${transportadora}\nComments: ${description}\nOriginal Conversation:` + " " + "logysto.kustomerapp.com/app/conversations/" + conversationId },
                { "country": country },
                { "teamSS": "66e31af27bdb222291f006fa" },
                { "miPaquete": "clientes@support.mipaquete.com" }
            ]
        }

        let callHook = () => {
            this.ajax(payload, "submit")
                .then(() => {
                    this.setState({
                        success: true,
                        submitting: false,
                        error: false,
                        errorMessage: null
                    });
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        submitting: false,
                        error: true,
                        errorMessage: "Something went wrong submitting this message. Please refresh the page and try again."
                    });
                });
        }; callHook();
    };

    renderForm() {
        const {
            attachments
        } = this.state;

        let attachedFiles = null;

        if (attachments.length > 0) {
            attachedFiles =
                <div style={{ 'marginBottom': '10px' }}>
                    {attachments.map(file => (
                        <li className="upload-item" key={file.name}>
                            <a className="upload-link"
                                style={{ color: 'black', marginRight: '4px' }}>{file.name}</a>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.removeAttachmentFile(file.name)}
                                className="upload-remove">❌</span>
                        </li>
                    ))}
                </div>
        };
        switch (this.state.form) {
            case "Supply":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Supply</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments"
                            >
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Bonificaciones" data-sn="supply.bonificaciones" data-qss="61eb1db3acf0830a9fc65ee6" data-ts="intern" data-sla="24" data-unit="h">Bonificaciones</option>
                                        <option value="Confirmación de pagos por disponibilidad" data-sn="supply.confirmacion_pagos_disponibilidad" data-qss="61eb1db3acf0830a9fc65ee6" data-ts="intern" data-sla="24" data-unit="h">Confirmación de pagos por disponibilidad</option>
                                        <option value="Confirmación de pagos por dedicados" data-sn="supply.confirmacion_pagos_dedicados" data-qss="61eb1db3acf0830a9fc65ee6" data-ts="intern" data-sla="24" data-unit="h">Confirmación de pagos por dedicados</option>
                                        <option value="Cambios en los documentos / datos / vehiculo del aliado" data-sn="supply.cambios_documentosDatosVehiculo_aliado" data-qss="6284d94d15396af5008d1579" data-ts="intern" data-sla="24" data-unit="h">Cambios en los documentos / datos / vehiculo del aliado</option>
                                        <option value="Asignar aliado (No se logró asignar desde CX)" data-sn="supply.asignar_aliado1" data-qss="61eb1db3acf0830a9fc65ee6" data-ts="intern" data-sla="1" data-unit="h">Asignar aliado (No se logró asignar desde CX)</option>
                                        <option value="Demora en recolección de paquetes (Aliado no contesta)" data-sn="supply.demora_recoleccion_aliado_no_contesta1" data-qss="61eb1db3acf0830a9fc65ee6" data-ts="intern" data-sla="1" data-unit="h">Demora en recolección de paquetes (Aliado no contesta)</option>
                                    </select>

                                    {
                                        this.state.scalationReasonId === "supply.asignar_aliado1" || this.state.scalationReasonId === "supply.demora_recoleccion_aliado_no_contesta1" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre de la marca</p>
                                                <input
                                                    value={this.state.brandName}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("brandName", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Guía</p>
                                                <input
                                                    value={this.state.idGuia}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idGuia", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id de la ruta</p>
                                                <input
                                                    value={this.state.idRuta}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idRuta", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre del aliado</p>
                                                <input
                                                    value={this.state.aliadoName}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoName", e.target.value)}
                                                    required />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Cédula</p>
                                                <input
                                                    value={this.state.aliadoIdentification}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoIdentification", e.target.value)}
                                                    required
                                                />

                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>ID del aliado</p>
                                                <input
                                                    value={this.state.idAliado}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idAliado", e.target.value)}
                                                    required
                                                />

                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Ciudad en la que opera el aliado:</p>
                                                <input
                                                    value={this.state.city}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => (this.setField("city", e.target.value))}
                                                    required
                                                />
                                            </React.Fragment>
                                    }

                                    {
                                        this.state.scalationReasonId === "supply.bonificaciones" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id de la ruta</p>
                                                <input
                                                    value={this.state.idRuta}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idRuta", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad" || this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px', color: 'black' }}>Fechas de días trabajados</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.bonificaciones" || this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad" || this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha corte de pago</p>
                                                <input
                                                    value={this.state.dateCortePago}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateCortePago", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.bonificaciones" || this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad" || this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha inicio del periodo que se adeuda</p>
                                                <input
                                                    value={this.state.dateInicioAdeuda}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateInicioAdeuda", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.bonificaciones" || this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad" || this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha fin del periodo que se adeuda</p>
                                                <input
                                                    value={this.state.dateFinAdeuda}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateFinAdeuda", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.bonificaciones" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Monto del bono</p>
                                                <input
                                                    value={this.state.bonusAmount}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("bonusAmount", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Cantidad de horas que se adeudan</p>
                                                <input
                                                    value={this.state.amountHours}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("amountHours", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Operación a la pertenece el aliado</p>
                                                <input
                                                    value={this.state.opnAliado}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("opnAliado", e.target.value)}
                                                    required />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ?
                                            ""
                                            :
                                            this.setField("attachments", e.clipboardData.files[0])
                                        }
                                        required
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label
                                        style={{ border: "solid 1px black", margin: "0px 5px" }}
                                        htmlFor="attachments">Adjunto
                                    </label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar</button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Operaciones":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Operaciones</h3><hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Confirmación de trazabilidad real" data-sn="operations.confirmacion_trazabilidad_real" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de trazabilidad real</option>
                                        <option value="Confirmación de paquete extraviado en bodega" data-sn="operations.confirmacion_paquete_extraviado_bodega" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de paquete extraviado en bodega</option>
                                        <option value="Confirmación de ingreso a clicOH (Primera Milla)" data-sn="operations.confirmacion_ingreso_clicoh_primeraMilla" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de ingreso a clicOH (Primera Milla)</option>
                                        <option value="Demoras en el despacho" data-sn="operations.demoras_despacho" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla="12" data-unit="h">Demoras en el despacho</option>
                                        <option value="Demora en la colecta" data-sn="operations.demora_colecta" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "6" : "1"} data-unit="h">Demora en la colecta</option>
                                        <option value="El aliado no pasó a retirar los paquetes" data-sn="operations.aliado_no_paso_a_retirar_paquete" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "6" : "1"} data-unit="h">El aliado no pasó a retirar los paquetes</option>
                                        {this.state.country === "ar" ? <option value="Paquete en tránsito" data-sn="operations.paquete_en_transito_" data-qss="65142d5b459c0c855c9fb226" data-ts="intern" data-sla="1" data-unit="h">Paquete en tránsito</option> : ""}
                                    </select>

                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Id Guía</p>
                                    <input
                                        value={this.state.idGuia}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idGuia", e.target.value)}
                                        required
                                    />
                                    <p style={styles.formSubtitle}>Id Hoja de ruta</p>
                                    <input
                                        value={this.state.idRuta}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idRuta", e.target.value)}
                                        required />
                                    <p style={styles.formSubtitle}>Ciudad</p>
                                    <input
                                        value={this.state.city}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("city", e.target.value)}
                                        required
                                    />
                                    {
                                        this.state.scalationReasonId === "operations.confirmacion_ingreso_clicoh_primeraMilla" ?
                                            <React.Fragment>
                                                <p style={styles.formSubtitle}>Fecha del estado validado</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "operations.demoras_despacho" ?
                                            <React.Fragment>
                                                <p style={styles.formSubtitle}>Fecha ingreso al HUB</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={styles.formSubtitle}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ?
                                            ""
                                            :
                                            this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>


                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Control Tower":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Control Tower</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Paquete en tránsito (No se logró contacto con el aliado)" data-sn="controlTower.paquete_en_transito" data-qss="61cb4aa32bba3b001ba8eec7" data-ts="intern" data-sla="1" data-unit="h">Paquete en tránsito (No se logró contacto con el aliado)</option>
                                        <option value="Paquete retornando (No se logró contacto con el aliado)" data-sn="controlTower.paquete_retornando" data-qss="61cb4aa32bba3b001ba8eec7" data-ts="intern" data-sla="1" data-unit="h">Paquete retornando (No se logró contacto con el aliado)</option>
                                        <option value="Novedades de Transporte Nacional" data-sn="controlTower.novedades_transporte_nacional" data-qss="62e43ef30aa8e17267e4da36" data-ts="intern" data-sla="12" data-unit="h">Novedades de Transporte Nacional</option>
                                        <option value="Demora SLA. Distribución Propia" data-sn="controlTower.demoraSLA_distribucion_propia" data-qss="61cb4aa32bba3b001ba8eec7" data-ts="intern" data-sla="1" data-unit="h">Demora SLA. Distribución Propia</option>
                                        <option value="Desconocimiento entrega/Visita fallida" data-sn="controlTower.desconocimientoEntrega_visitaFallida" data-qss="61cb4aa32bba3b001ba8eec7" data-ts="intern" data-sla="1" data-unit="h">Desconocimiento entrega/Visita fallida</option>
                                        <option value="Solicitud de inversa" data-sn="controlTower.solicitud_inversa" data-qss="61cb4aa32bba3b001ba8eec7" data-ts="intern" data-sla="1" data-unit="h">Solicitud de inversa</option>
                                        {this.state.country != "cl" ? <option value="Retraso en salida de segundos intentos" data-sn="controlTower.retraso_salida_segundos_intentos" data-qss="630d63acf2a226333eec8afe" data-ts="intern" data-sla="9" data-unit="h">Retraso en salida de segundos intentos</option> : ""}
                                        {this.state.country != "cl" ? <option value="Confirmación y marcación de devolución a CEDI" data-sn="controlTower.confirmacion_marcacion_devolucion_cedi" data-qss="630d63acf2a226333eec8afe" data-ts="intern" data-sla="9" data-unit="h">Confirmación y marcación de devolución a CEDI</option> : ""}
                                        {this.state.country != "cl" ? <option value="Retraso de devolución a CEDI" data-sn="controlTower.retraso_devolucion_cedi" data-qss="630d63acf2a226333eec8afe" data-ts="intern" data-sla="9" data-unit="h">Retraso de devolución a CEDI</option> : ""}
                                        {this.state.country != "cl" ? <option value="Confirmación y marcación de devolución a WH / HUB clicOH" data-sn="controlTower.confirmacion_marcacion_devolucionWH_HUBclicOH" data-qss="630d63acf2a226333eec8afe" data-ts="intern" data-sla="9" data-unit="h">Confirmación y marcación de devolución a WH / HUB clicOH</option> : ""}
                                    </select>
                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    {
                                        this.state.scalationReasonId === "controlTower.novedades_transporte_nacional" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Tipo de Novedad:</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id=""
                                                    value={this.state.typeNovedad}
                                                    onChange={e => (this.setField("typeNovedad", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="Demoras en el despacho">Demoras en el despacho</option>
                                                    <option value="Demora en la entrega">Demora en la entrega</option>
                                                    <option value="Desconocimiento de entrega">Desconocimiento de entrega</option>
                                                    <option value="Llegó algo diferente a lo que compro">Llegó algo diferente a lo que compro</option>
                                                    <option value="Llegó el paquete en mal estado">Llegó el paquete en mal estado</option>
                                                    <option value="Novedades Nacionales">Novedades Nacionales</option>
                                                </select>
                                            </React.Fragment> : ""
                                    }
                                    {
                                        this.state.scalationReasonId === "controlTower.paquete_en_transito" || this.state.scalationReasonId === "controlTower.paquete_retornando" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre del aliado</p>
                                                <input
                                                    value={this.state.aliadoName}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoName", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }

                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Id Guía</p>
                                    <input
                                        value={this.state.idGuia}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idGuia", e.target.value)}
                                        required
                                    />
                                    {
                                        this.state.scalationReasonId === "controlTower.paquete_retornando" || this.state.scalationReasonId === "controlTower.demora_recoleccion_aliado_no_contesta" || this.state.scalationReasonId === "controlTower.asignar_aliado" || this.state.scalationReasonId === "controlTower.retraso_salida_segundos_intentos" || this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucion_cedi" || this.state.scalationReasonId === "controlTower.retraso_devolucion_cedi" || this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucionWH_HUBclicOH" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Hoja de ruta</p>
                                                <input
                                                    value={this.state.idRuta}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idRuta", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.typeNovedad === "Desconocimiento de entrega" || this.state.typeNovedad === "Llegó algo diferente a lo que compro" || this.state.typeNovedad === "Llegó el paquete en mal estado" || this.state.typeNovedad === "Novedades Nacionales" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Guía MiPaquete</p>
                                                <input
                                                    value={this.state.guiaMiPaquete}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("guiaMiPaquete", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Guía Transportadora</p>
                                                <input
                                                    value={this.state.guiaTercero}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("guiaTercero", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={styles.formSubtitle}>Ciudad</p>
                                    <input
                                        value={this.state.city}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("city", e.target.value)}
                                        required
                                    />
                                    {
                                        this.state.scalationReasonId === "controlTower.paquete_en_transito" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de estado en tránsito</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "controlTower.paquete_retornando" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de estado en retornando</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "controlTower.sin_movimiento_partner" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de recolección</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "controlTower.retraso_salida_segundos_intentos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de marcación del reintento</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "confirmacion_marcacion_devolucion_cedi" || this.state.scalationReasonId === "controlTower.retraso_devolucion_cedi" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de solicitud de devolución a CEDI</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label
                                        style={{ border: "solid 1px black", margin: "0px 5px" }}
                                        htmlFor="attachments">Adjunto
                                    </label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '24px', padding: '0 8px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Pago Aliados":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Pagos</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Aliado no recibió su pago" data-sn="pagos.aliado_sin_pago" data-qss="61eb1df87a604d4d997b1a22" data-ts="intern" data-sla="24" data-unit="h">Aliado no recibió su pago</option>
                                        <option value="Aliado recibió su pago incompleto" data-sn="pagos.aliado_pago_incompleto" data-qss="61eb1df87a604d4d997b1a22" data-ts="intern" data-sla="24" data-unit="h">Aliado recibió su pago incompleto</option>
                                        <option value="Descuentos que no aplican / no autorizados" data-sn="pagos.descuentos_no_aplican_no_autorizados" data-qss="61eb1df87a604d4d997b1a22" data-ts="intern" data-sla="24" data-unit="h">Descuentos que no aplican / no autorizados</option>
                                        <option value="Solicitud de Certificados" data-sn="pagos.solicitud_certificados" data-qss="61eb1df87a604d4d997b1a22" data-ts="intern" data-sla="48" data-unit="h">Solicitud de Certificados</option>
                                    </select>
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre del aliado</p>
                                    <input
                                        value={this.state.aliadoName}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("aliadoName", e.target.value)}
                                        required
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Número de documento de identificacion</p>
                                    <input
                                        value={this.state.aliadoIdentification}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("aliadoIdentification", e.target.value)}
                                        required
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Id del aliado</p>
                                    <input
                                        value={this.state.idAliado}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idAliado", e.target.value)}
                                    />
                                    {
                                        this.state.scalationReasonId === "pagos.solicitud_certificados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Certificado:</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationGuideStatus"
                                                    value={this.state.allyCertify}
                                                    onChange={e => (this.setField("allyCertify", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="retefuente">Refefuente</option>
                                                    <option value="reteICA">Rete ICA</option>
                                                    <option value="retefuenteReteica">Retefuente y Reteica</option>
                                                </select>
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId !== "pagos.solicitud_certificados" && this.state.country === "co" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Ciudad en la que opera el aliado:</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationGuideStatus"
                                                    value={this.state.opCiudad}
                                                    onChange={e => (this.setField("opCiudad", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="bogota">Bogotá</option>
                                                    <option value="cali">Cali</option>
                                                    <option value="barranquilla">Barranquilla</option>
                                                    <option value="medellin">Medellín</option>
                                                    <option value="neiva">Neiva</option>
                                                    <option value="ibague">Ibagué</option>
                                                    <option value="villavicencio">Villavicencio</option>
                                                </select>
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId !== "pagos.solicitud_certificados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>{this.state.country === "co" ? "Celular para pagos / Cuenta bancaria" : "Cuenta bancaria"}</p>
                                                <input
                                                    value={this.state.numCelularCuenta}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("numCelularCuenta", e.target.value)}
                                                />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Entidad</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationEntidad"
                                                    value={this.state.entidad}
                                                    onChange={e => (this.setField("entidad", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="daviplata">Daviplata</option>
                                                    <option value="tePaga">TePaga</option>
                                                    <option value="nequi">Nequi</option>
                                                    <option value="cuentaDavivienda">Cuenta bancaria Davivienda</option>
                                                </select>
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId !== "pagos.solicitud_certificados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha corte de pago</p>
                                                <input
                                                    value={this.state.dateCortePago}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateCortePago", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.falla_actualizacion_datos_pagos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Falla presentada</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationEntidad"
                                                    value={this.state.falla}
                                                    onChange={e => (this.setField("falla", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="sinActualizarDatos">El sistema no permite actualizar datos</option>
                                                    <option value="sinMatrizGeneral">Se actualizan sin cambio en matriz general</option>
                                                </select>
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.aliado_sin_pago" || this.state.scalationReasonId === "pagos.aliado_pago_incompleto" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha inicio del periodo que se adeuda</p>
                                                <input
                                                    value={this.state.dateInicioAdeuda}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateInicioAdeuda", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.aliado_sin_pago" || this.state.scalationReasonId === "pagos.aliado_pago_incompleto" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha fin del periodo que se adeuda</p>
                                                <input
                                                    value={this.state.dateFinAdeuda}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateFinAdeuda", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.descuentos_no_aplican_no_autorizados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha inicio del periodo de los descuentos</p>
                                                <input
                                                    value={this.state.dateInicioDescuentos}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateInicioDescuentos", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.descuentos_no_aplican_no_autorizados" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha fin del periodo de los descuentos</p>
                                                <input
                                                    value={this.state.dateFinDescuentos}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateFinDescuentos", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "pagos.aliado_pago_incompleto" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Concepto faltante</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationConceptoFaltante"
                                                    value={this.state.conceptoFaltante}
                                                    onChange={e => (this.setField("conceptoFaltante", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="bonos">Bonos</option>
                                                    <option value="rutas">Rutas</option>
                                                    <option value="guiasOrdenes">Guías/Ordenes</option>
                                                </select>
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '24px', padding: '0 8px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit" value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar</button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Financiero":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Financiero</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableCountry
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Fallas / Demora en recargas para clientes de paqueteria" data-sn="financiero_marcas.fallas_recargas_clientes_paqueteria" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Fallas / Demora en recargas para clientes de paqueteria</option>
                                        <option value="Solicitud de inicio de proceso de Refacturación / Siniestros" data-sn="financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros" data-qss="62e7de1db032e5866576e625" data-ts="intern" data-sla="8" data-unit="d">Solicitud de inicio de proceso de Refacturación / Siniestros</option>
                                        <option value="Demora en el proceso de Refacturación / Siniestros" data-sn="financiero_marcas.demora_proceso_refacturacion_siniestros" data-qss="62e7de1db032e5866576e625" data-ts="intern" data-sla="24" data-unit="h">Demora en el proceso de Refacturación / Siniestros</option>
                                        <option value="Solicitud de devolución de saldo en cuenta por cierre de operacion" data-sn="financiero_marcas.solicitud_devolucion_saldo_cierre_operacion" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Solicitud de devolución de saldo en cuenta por cierre de operacion</option>
                                        <option value="Solicitud de factura" data-sn="financiero_marcas.solicitud_factura" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Solicitud de factura</option>
                                        {this.state.country === "co" ? <option value="Solicitud de estado de cuenta" data-sn="financiero_marcas.solicitud_estado_cuenta" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Solicitud de estado de cuenta</option> : ""}
                                        {this.state.country != "co" ? <option value="Solicitud de facturas pendientes" data-sn="financiero_marcas.solicitud_facturas_pendientes" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Solicitud de facturas pendientes</option> : ""}
                                        <option value="Actualizar correo de facturación" data-sn="financiero_marcas.actualizar_correo_facturacion" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla={this.state.country === "co" ? "24" : "48"} data-unit="h">Actualizar correo de facturación</option>
                                        <option value="Problemas en la factura / Talles incorrectos" data-sn="financiero_marcas.problemas_factura_talles" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Problemas en la factura / Talles incorrectos</option>
                                        <option value="Problemas en la factura / Tarifas incorrectas" data-sn="financiero_marcas.problemas_factura_tarifas" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Problemas en la factura / Tarifas incorrectas</option>
                                        <option value="Problemas en la factura / Bono no escalado por siniestro" data-sn="financiero_marcas.problemas_factura_bono" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Problemas en la factura / Bono no escalado por siniestro</option>
                                        {this.state.country === "co" ? <option value="Problemas en la factura / Descuentos comerciales no aplicados" data-sn="financiero_marcas.problemas_factura_descuentos" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Problemas en la factura / Descuentos comerciales no aplicados</option> : ""}
                                        {this.state.country != "co" ? <option value="Problemas en la factura / Deuda vencida" data-sn="financiero_marcas.problemas_factura_deuda" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Problemas en la factura / Deuda vencida</option> : ""}
                                        <option value="Confirmación soporte de pago" data-sn="financiero_marcas.confirmacion_soporte_pago" data-qss="650c7a141eb2290cdabec107" data-ts="intern" data-sla="48" data-unit="h">Confirmación soporte de pago</option>
                                    </select>
                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }} />
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros" || this.state.scalationReasonId === "financiero_marcas.demora_proceso_refacturacion_siniestros" || this.state.scalationReasonId === "financiero_marcas.problemas_facturas_talles" || this.state.scalationReasonId === "financiero_marcas.problemas_facturas_tarifas" || this.state.scalationReasonId === "financiero_marcas.problemas_facturas_bonos" || this.state.scalationReasonId === "financiero_marcas.problemas_facturas_descuentos" || this.state.scalationReasonId === "financiero_marcas.confirmacion_soporte_pago" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Guía</p>
                                                <input
                                                    value={this.state.idGuia}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idGuia", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.problemas_factura_talles" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_tarifas" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_bono" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_descuentos" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_bono" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_deuda" || this.state.scalationReasonId === "financiero_marcas.confirmacion_soporte_pago" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Número de Factura</p>
                                                <input
                                                    value={this.state.numFactura}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("numFactura", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.fallas_recargas_clientes_paqueteria" || this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_por_retiro" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Cuenta bancaria</p>
                                                <input
                                                    value={this.state.cuentaBancaria}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("cuentaBancaria", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }

                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_cierre_operacion" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Entidad</p>
                                                <input
                                                    value={this.state.entidad}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("entidad", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.fallas_recargas_clientes_paqueteria" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Monto recargado</p>
                                                <input
                                                    value={this.state.montoRecarga}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("montoRecarga", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.fallas_recargas_clientes_paqueteria" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de recarga</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        ["financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros", "financiero_marcas.demora_proceso_refacturacion_siniestros"].includes(this.state.scalationReasonId) ?
                                            (
                                                <React.Fragment>
                                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Razón de refacturación</p>
                                                    <select
                                                        style={{ width: '95%' }}
                                                        id="scalationRazonFacturacion"
                                                        value={this.state.razonFacturacion}
                                                        onChange={e => (this.setField("razonFacturacion", e.target.value))}>
                                                        <option hidden selected value=""> - </option>
                                                        <option value="hurtoHaciaAliado">Hurto hacia el aliado</option>
                                                        <option value="hurtoDelAliado">Hurto del aliado</option>
                                                        <option value="extravioDelAliado">Extravió del aliado</option>
                                                        <option value="extravioEnBodega">Extravió en bodega</option>
                                                    </select>
                                                </React.Fragment>
                                            )
                                            :
                                            ""
                                    }
                                    {
                                        ["hurtoHaciaAliado", "hurtoDelAliado", "extravioDelAliado"].includes(this.state.razonFacturacion) ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre del aliado</p>
                                                <input
                                                    value={this.state.aliadoName}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoName", e.target.value)}
                                                />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>ID del aliado</p>
                                                <input
                                                    value={this.state.idAliado}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idAliado", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros" || this.state.scalationReasonId === "financiero_marcas.demora_proceso_refacturacion_siniestros" ? (
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Monto de la factura</p>
                                                <input
                                                    value={this.state.montoFactura}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("montoFactura", e.target.value)}
                                                />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Responsable de la refacturación</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationResponsableFacturacion"
                                                    value={this.state.responsableFact}
                                                    onChange={e => (this.setField("responsableFact", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="aliado">Aliado</option>
                                                    <option value="clicoh">clicOH</option>
                                                    <option value="aliadoClicoh">50% Aliado - 50% clicOH</option>
                                                </select>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Tipo de Refacturación</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationResponsableFacturacion"
                                                    value={this.state.tipoFacturacion}
                                                    onChange={e => (this.setField("tipoFacturacion", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="cruceCuentas">Cruce de cuentas</option>
                                                    <option value="reembolso">Reembolso</option>
                                                </select>
                                            </React.Fragment>
                                        )
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.demora_proceso_refacturacion_siniestros" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de escalamiento inicial</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_cierre_operacion"
                                            ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Monto a devolver</p>
                                                <input
                                                    value={this.state.montoDevolver}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("montoDevolver", e.target.value)}
                                                />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Razón del retiro</p>
                                                <select
                                                    style={{ width: '95%' }}
                                                    id="scalationRazonRetiro"
                                                    value={this.state.razonRetiro}
                                                    onChange={e => (this.setField("razonFacturacion", e.target.value))}>
                                                    <option hidden selected value=""> - </option>
                                                    <option value="incumplimientoPromesa">Incumplimiento en la promesa</option>
                                                    <option value="incumplimientoEfectividad"> Incumplimiento en la efectividad</option>
                                                    <option value="tiemposRecoleccionAltos">Tiempos de recolección altos</option>
                                                    <option value="tiemposEntregaAltos">Tiempos de entrega altos</option>
                                                    <option value="cobertura">Cobertura</option>
                                                    <option value="inconformidadServicio">Inconformidad con servicio al cliente</option>
                                                </select>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de creación de la marca</p>
                                                <input
                                                    value={this.state.dateCreateMarca}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateCreateMarca", e.target.value)}
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de retiro de la marca</p>
                                                <input
                                                    value={this.state.dateRetiroMarca}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("dateRetiroMarca", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_factura" || this.state.scalationReasonId === "financiero_marcas.solicitud_estado_cuenta" || this.state.scalationReasonId === "financiero_marcas.solicitud_facturas_pendientes" || this.state.scalationReasonId === "financiero_marcas.actualizar_correo_facturacion" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_talles" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_tarifas" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_bono" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_descuentos" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_deuda" || this.state.scalationReasonId === "financiero_marcas.confirmacion_soporte_pago" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Fecha de la Factura</p>
                                                <input
                                                    value={this.state.date}
                                                    type="date"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_inconformidad_recaudos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Valor del desacuerdo</p>
                                                <input
                                                    value={this.state.montoRecarga}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("montoRecarga", e.target.value)}
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                    />
                                    {
                                        this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_cierre_operacion" ?
                                            <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Adjuntar Certificación Bancaria:</p>
                                            :
                                            ""
                                    }
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '24px', padding: '0 8px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Interno CS":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Interno CS</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Problemas en la recolección (producto no disponible)" data-sn="interno_cs.problemas_recoleccion_producto_no_disponible" data-qss="619c093dda3a8e001b0af9bc" data-ts="intern" data-sla="1" data-unit="h">Problemas en la recolección (producto no disponible)</option>
                                        <option value="Novedades de entrega (segundos intentos)" data-sn="interno_cs.novedades_entrega_segundos_intentos" data-qss="61a5a08ceaea9a001a7975eb" data-ts="intern" data-sla="1" data-unit="h">Novedades de entrega (segundos intentos)</option>
                                        <option value="Reconocimientos" data-sn="interno_cs.reconocimientos" data-qss="619c093dda3a8e001b0af9bc" data-ts="intern" data-sla="1" data-unit="h">Reconocimientos</option>
                                        <option value="Refacturación" data-sn="interno_cs.refacturacion" data-qss="62e7fe80f645d2317fc9ec3d" data-ts="intern" data-sla="2" data-unit="no">Refacturaciones Marcas</option>
                                    </select>
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre de la marca</p>
                                    <input
                                        value={this.state.brandName}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("brandName", e.target.value)}
                                        required
                                    />
                                    {
                                        this.state.scalationReasonId === "interno_cs.problemas_recoleccion_producto_no_disponible" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Tienda</p>
                                                <input
                                                    value={this.state.brandTienda}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("brandTienda", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre del aliado</p>
                                                <input
                                                    value={this.state.aliadoName}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoName", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "interno_cs.problemas_recoleccion_producto_no_disponible" || this.state.scalationReasonId === "interno_cs.novedades_entrega_segundos_intentos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id de la Guía</p>
                                                <input
                                                    value={this.state.idGuia}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idGuia", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "interno_cs.reconocimientos" || this.state.scalationReasonId === "interno_cs.refacturacion" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id Guía / Orden</p>
                                                <input
                                                    value={this.state.idGuia}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("idGuia", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "interno_cs.novedades_entrega_segundos_intentos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Dirección actualizada + Complemento</p>
                                                <input
                                                    value={this.state.address}
                                                    type="text"
                                                    style={{ width: '95%' }}
                                                    onChange={e => this.setField("address", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre del destinatario</p>
                                                <input value={this.state.destnrioName} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("destnrioName", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Teléfono destinatario</p>
                                                <input value={this.state.numContact} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("numContact", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Ciudad</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationGuideStatus"
                                        value={this.state.city}
                                        onChange={e => (this.setField("city", e.target.value))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="bogota">Bogotá</option>
                                        <option value="cali">Cali</option>
                                        <option value="cartagena">Cartagena</option>
                                        <option value="barranquilla">Barranquilla</option>
                                        <option value="medellin">Medellín</option>
                                        <option value="neiva">Neiva</option>
                                        <option value="ibague">Ibagué</option>
                                        <option value="villavicencio">Villavicencio</option>
                                    </select>
                                    {
                                        this.state.scalationReasonId === "interno_cs.reconocimientos" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Dirección de entrega</p>
                                                <input value={this.state.address} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("address", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "interno_cs.refacturacion" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Causa</p>
                                                <input value={this.state.falla} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("falla", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input id="attachments" multiple type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Darkstore":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Darkstore</h3>
                        <hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments" >
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                    <select style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Solicitud creación de servicio por demora en el despacho" data-sn="darkstore.solicitud_creacion_servicio_demora_despacho" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Solicitud creación de servicio por demora en el despacho</option>
                                        <option value="Cancelar alistamiento de guia no creada" data-sn="darkstore.cancelar_alistamiento_guia_no_creada" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Cancelar alistamiento de guia no creada</option>
                                        <option value="Demora / Status  en el picking de la orden" data-sn="darkstore.demora_status_picking_de_orden" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Demora / Status  en el picking de la orden</option>
                                        <option value="Devolución a la darkstore " data-sn="darkstore.devolucion_a_darkstore" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Devolución a la darkstore</option>
                                        <option value="Cruce en el alistamiento" data-sn="darkstore.troque_alistamiento" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Cruce de alistamiento </option>
                                        <option value="Producto extraviado o averiado en la darkstore" data-sn="darkstore.producto_extraviado_averiado_en_darkstore" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="72" data-unit="h">Producto extraviado o averiado en la darkstore</option>
                                        <option value="Notificación/Confirmación de abastecimiento Primera Milla" data-sn="darkstore.notificacion_confirmacion_abastecimiento" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="2" data-unit="h">Notificación/Confirmación de abastecimiento Primera Milla</option>
                                        <option value="Solicitud / Creación de relación de serial con orden" data-sn="darkstore.solicitud_relacion_serial_orden" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Solicitud / Creación de relación de serial con orden</option>
                                        <option value="Solicitud de conciliacion de inventario" data-sn="darkstore.solicitud_conciliacion_inventario" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="72" data-unit="h">Solicitud de conciliacion de inventario</option>
                                        <option value="Actualizacion de Fulfilment (Requerimiento de entrega)" data-sn="darkstore.actualizacion_fulfilment" data-qss="62dea4acb0417563adf149a2" data-ts="intern" data-sla="24" data-unit="h">Actualizacion de Fulfilment (Requerimiento de entrega)</option>
                                        <option value="Demoras en el despacho / procesamiento de campañas" data-sn="darkstore.demorasDespacho_procesamientoCampañas" data-qss="651ac1bc02d7a22d82dfae9a" data-ts="intern" data-sla="24" data-unit="h">Demoras en el despacho / procesamiento de campañas</option>
                                        <option value="Creacion de campañas" data-sn="darkstore.creacion_campañas" data-qss="651ac1bc02d7a22d82dfae9a" data-ts="intern" data-sla="24" data-unit="h">Creacion de campañas</option>
                                        <option value="Recepción de abastecimiento campañas" data-sn="darkstore.recepcion_abastecimiento_campañas" data-qss="651ac1bc02d7a22d82dfae9a" data-ts="intern" data-sla="24" data-unit="h">Recepción de abastecimiento campañas</option>
                                        <option value="Recolección de productos de campañas" data-sn="darkstore.recoleccion_productos_campañas" data-qss="651ac1bc02d7a22d82dfae9a" data-ts="intern" data-sla="24" data-unit="h">Recolección de productos de campañas</option>
                                    </select>
                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    {
                                        this.state.scalationReasonId !== "darkstore.notificacion_confirmacion_abastecimiento" && this.state.scalationReasonId !== "darkstore.solicitud_conciliacion_inventario" && this.state.scalationReasonId !== "darkstore.actualizacion_fulfilment" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Número de orden</p>
                                                <input value={this.state.idOrden} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("idOrden", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.notificacion_confirmacion_abastecimiento" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Fecha de abastecimiento</p>
                                                <input value={this.state.date} type="date" style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.demora_status_picking_de_orden" || this.state.scalationReasonId === "darkstore.devolucion_a_darkstore" || this.state.scalationReasonId === "darkstore.troque_alistamiento" || this.state.scalationReasonId === "darkstore.producto_extraviado_averiado_en_darkstore" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Id de la Guía</p>
                                                <input value={this.state.idGuia} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("idGuia", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Ciudad de la Darkstore</p>
                                    <input
                                        type="text"
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationGuideStatus"
                                        value={this.state.city}
                                        onChange={e => (this.setField("city", e.target.value))}
                                    />
                                    {
                                        this.state.scalationReasonId === "darkstore.solicitud_conciliacion_inventario" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Unidades en las que se presenta diferencias</p>
                                                <input value={this.state.nuevosDatos} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("nuevosDatos", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre del WMS</p>
                                                <input value={this.state.nombreProducto} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("nombreProducto", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Inventario enviado por la marca</p>
                                                <input value={this.state.inventarioMarca} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("inventarioMarca", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.devolucion_a_darkstore" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre del aliado</p>
                                                <input value={this.state.aliadoName} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoName", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Cédula del aliado</p>
                                                <input value={this.state.aliadoIdentification} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("aliadoIdentification", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.producto_extraviado_averiado_en_darkstore" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre de producto</p>
                                                <input value={this.state.nombreProducto} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("nombreProducto", e.target.value)}
                                                    required
                                                />
                                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Código referencia principal del producto</p>
                                                <input value={this.state.codProducto} type="text" style={{ width: '95%' }}
                                                    onChange={e => this.setField("codProducto", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.demorasDespacho_procesamientoCampañas" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Fecha de la campaña</p>
                                                <input value={this.state.date} type="date" style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.recepcion_abastecimiento_campañas" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Fecha de envío de abastecimiento</p>
                                                <input value={this.state.date} type="date" style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    {
                                        this.state.scalationReasonId === "darkstore.recoleccion_productos_campañas" ?
                                            <React.Fragment>
                                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Fecha de recolección</p>
                                                <input value={this.state.date} type="date" style={{ width: '95%' }}
                                                    onChange={e => this.setField("date", e.target.value)}
                                                    required
                                                />
                                            </React.Fragment>
                                            :
                                            ""
                                    }
                                    <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                    <textarea style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input id="attachments" multiple type="file" h
                                        idden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>
                                </div>
                                {attachedFiles}
                                <footer>
                                    <button style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4" type="submit" value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar</button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Customer Service":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Customer Service</h3>
                        <hr />
                        <div className="form"><form onSubmit={this.handleSubmit.bind(this)}
                            className="request-form" id="payments">
                            <div className="form-group form-group-pair">
                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                <select style={{ width: '95%' }}
                                    required
                                    id="scalationReasonEntes"
                                    value={this.state.scalationReason}
                                    onChange={e => (this.setField("scalationReason", e.target.value),
                                        this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                        this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                        this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                        this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                        this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                    <option hidden selected value=""> - </option>
                                    <option value="Confirmacion de Dirección de entrega" data-sn="customer_service.confirmacion_direccion_entrega" data-qss="61a5a08ceaea9a001a7975eb" data-ts="intern" data-sla="12" data-unit="h">Confirmacion de Dirección de entrega</option>
                                </select>
                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Nombre de la marca</p>
                                <input value={this.state.brandName} type="text" style={{ width: '95%' }}
                                    onChange={e => this.setField("brandName", e.target.value)}
                                    required
                                />
                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Id Guía/Orden</p>
                                <input value={this.state.idGuia} type="text" style={{ width: '95%' }}
                                    onChange={e => this.setField("idGuia", e.target.value)}
                                    required
                                />
                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Nombre del Destinatario</p>
                                <input value={this.state.destnrioName} type="text" style={{ width: '95%' }}
                                    onChange={e => this.setField("destnrioName", e.target.value)}
                                    required
                                />
                                <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>Teléfono Destinatario</p>
                                <input value={this.state.numContact} type="text" style={{ width: '95%' }}
                                    onChange={e => this.setField("numContact", e.target.value)}
                                    required
                                />
                                <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Ciudad</p>
                                <select style={{ width: '95%' }} required id="scalationGuideStatus" value={this.state.city}
                                    onChange={e => (this.setField("city", e.target.value))}>
                                    <option hidden selected value=""> - </option>
                                    <option value="bogota">Bogotá</option>
                                    <option value="cali">Cali</option>
                                    <option value="barranquilla">Barranquilla</option>
                                    <option value="medellin">Medellín</option>
                                    <option value="neiva">Neiva</option>
                                    <option value="ibague">Ibagué</option>
                                    <option value="villavicencio">Villavicencio</option>
                                </select><p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                                <textarea style={{ width: '95%', height: '70px' }}
                                    onChange={e => this.setField("description", e.target.value)}
                                    onPaste={e => e.clipboardData.getData('Text') ? "" : this.setField("attachments", e.clipboardData.files[0])}
                                    required
                                />
                                <input id="attachments" multiple type="file" hidden
                                    onChange={e => this.setField("attachments", e.target.files[0])}
                                />
                                <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>
                            </div>
                            {attachedFiles}
                            <footer>
                                <button
                                    style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px' }}
                                    className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4" type="submit" value="Submit"
                                    onClick={() => this.setField("type", "userTeams")}>Enviar
                                </button>
                            </footer>
                        </form>
                        </div>
                    </React.Fragment>
                );
            case "Operaciones MP":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Operaciones MiPaquete</h3><hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Solicitud de inicio de proceso de Refacturación/Siniestros" data-sn="operaciones_mp.solicitud_proceso_refacturacion_siniestros" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="15" data-unit="d">Solicitud de inicio de proceso de Refacturación/Siniestros</option>
                                        <option value="Confirmación de trazabilidad real" data-sn="operaciones_mp.confirmacion_trazabilidad_real1" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="8" data-unit="h">Confirmación de trazabilidad real</option>
                                        <option value="Solicitud de Devolución a la Transportadora" data-sn="operaciones_mp.solicitud_devolucion_transportadora" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="12" data-unit="h">Solicitud de Devolución a la Transportadora</option>
                                        <option value="Actualización/Cambio de datos en la guía" data-sn="operaciones_mp.actualizacion_datos_guia" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="12" data-unit="h">Actualización/Cambio de datos en la guía</option>
                                        <option value="Demora en la recolección de paquetes" data-sn="operaciones_mp.demora_recoleccion_paquetes" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="8" data-unit="h">Demora en la recolección de paquetes</option>
                                        <option value="Novedad/Demora en la entrega" data-sn="operaciones_mp.novedad_demora_entrega" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="8" data-unit="h">Novedad/Demora en la entrega</option>
                                        <option value="Retraso en salida de segundos intentos" data-sn="operaciones_mp.retraso_salida_segundos_intentos1" data-qss="66df6a36814da1151caf1152" data-ts="intern" data-sla="8" data-unit="h">Retraso en salida de segundos intentos</option>
                                    </select>
                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Id Guía</p>
                                    <input
                                        value={this.state.idGuia}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idGuia", e.target.value)}
                                        required
                                    />
                                    <p style={styles.formSubtitle}>Id MiPaquete</p>
                                    <input
                                        value={this.state.guiaMiPaquete}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("guiaMiPaquete", e.target.value)}
                                        required />
                                    <p style={styles.formSubtitle}>Transportadora</p>
                                    <input
                                        value={this.state.transportadora}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("transportadora", e.target.value)}
                                        required
                                    />
                                    <p style={styles.formSubtitle}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ?
                                            ""
                                            :
                                            this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>


                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            case "Financiero MP":
                return (
                    <React.Fragment>
                        <h3 className="form-title">Financiero MiPaquete</h3><hr />
                        <div className="form">
                            <form
                                onSubmit={this.handleSubmit.bind(this)}
                                className="request-form"
                                id="payments">
                                <div className="form-group form-group-pair">
                                    <ReusableSelectMarcaPais
                                        label="Selecciona el país:"
                                        options={optionsCountries}
                                        value={this.state.country}
                                        onChange={e => (this.setField("country", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Selecciona la razón de escalamiento</p>
                                    <select
                                        style={{ width: '95%' }}
                                        required
                                        id="scalationReasonEntes"
                                        value={this.state.scalationReason}
                                        onChange={e => (this.setField("scalationReason", e.target.value),
                                            this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                            this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                            this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                            this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                            this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                        <option hidden selected value=""> - </option>
                                        <option value="Demora en la consignación del recaudo" data-sn="financiero_mp.demora_consignacion_recaudo" data-qss="66e31613f78b0d2ae585caa1" data-ts="intern" data-sla="8" data-unit="8">Demora en la consignación del recaudo</option>
                                        <option value="Solicitud de factura (Billing)" data-sn="financiero_mp.solicitud_factura_billing" data-qss="66e31613f78b0d2ae585caa1" data-ts="intern" data-sla="8" data-unit="h">Solicitud de factura (Billing)</option>
                                        <option value="Detalle de facturación" data-sn="financiero_mp.detalle_facturacion" data-qss="66e31613f78b0d2ae585caa1" data-ts="intern" data-sla="8" data-unit="h">Detalle de facturación</option>
                                        <option value="Problemas en la factura/Talles incorrectos" data-sn="financiero_mp.problemas_factura_talles_incorrectos" data-qss="66e31613f78b0d2ae585caa1" data-ts="intern" data-sla="8" data-unit="h">Problemas en la factura/Talles incorrectos</option>
                                        <option value="Problemas con el pago de recaudos" data-sn="financiero_mp.problemas_pago_recaudos" data-qss="66e31613f78b0d2ae585caa1" data-ts="intern" data-sla="8" data-unit="h">Problemas con el pago de recaudos</option>
                                    </select>
                                    <ReusableSelectMarcaPais
                                        label="Seleccione la Marca:"
                                        options={optionsMarca}
                                        value={this.state.marca}
                                        onChange={e => (this.setField("marca", e.target.value))}
                                        style={{ width: '95%' }}
                                    />
                                    <p style={styles.formSubtitle}>Id Guía</p>
                                    <input
                                        value={this.state.idGuia}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("idGuia", e.target.value)}
                                        required
                                    />
                                    <p style={styles.formSubtitle}>Id MiPaquete</p>
                                    <input
                                        value={this.state.guiaMiPaquete}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("guiaMiPaquete", e.target.value)}
                                        required />
                                    <p style={styles.formSubtitle}>Transportadora</p>
                                    <input
                                        value={this.state.transportadora}
                                        type="text"
                                        style={{ width: '95%' }}
                                        onChange={e => this.setField("transportadora", e.target.value)}
                                        required
                                    />
                                    <p style={styles.formSubtitle}>Comentarios adicionales</p>
                                    <textarea
                                        style={{ width: '95%', height: '70px' }}
                                        onChange={e => this.setField("description", e.target.value)}
                                        onPaste={e => e.clipboardData.getData('Text') ?
                                            ""
                                            :
                                            this.setField("attachments", e.clipboardData.files[0])}
                                        required
                                    />
                                    <input
                                        id="attachments"
                                        multiple
                                        type="file"
                                        hidden
                                        onChange={e => this.setField("attachments", e.target.files[0])}
                                    />
                                    <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>


                                </div>
                                {attachedFiles}
                                <footer>
                                    <button
                                        style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                        className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                        type="submit"
                                        value="Submit"
                                        onClick={() => this.setField("type", "userTeams")}>Enviar
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </React.Fragment>
                );
            default:
                return (<p>Selecciona un formulario</p>);
        };
    };



    render() {
        const { success, submitting, error, resultJson, totalConvos, type } = this.state;
        if (error) {
            return <p>Error</p>
        }
        if (submitting) {/* Use this below copy to customize your success message*/
            return (
                <div width="100%">
                    <img align="center" width="100%" src="https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif" alt="loading" />
                </div>
            )
        }
        if (success) {/* Use this below copy to customize your success message*/
            return <p>Creado correctamente</p>
        } if (this.state.conversationSecundary && _.get(conversation, 'tags').includes("61d5e7315ac61305eabc34b7")) {
            const { attachments } = this.state;
            let attachedFiles = null;
            if (attachments.length > 0) {
                attachedFiles = <div style={{ 'marginBottom': '10px' }}>
                    {
                        attachments.map(file => (
                            <li className="upload-item" key={file.name}>
                                <a className="upload-link" style={{ color: 'black', marginRight: '4px' }}>{file.name}</a>
                                <span style={{ cursor: 'pointer' }}
                                    onClick={() => this.removeAttachmentFile(file.name)}
                                    className="upload-remove">❌
                                </span>
                            </li>
                        )
                        )
                    }
                </div>
            };
            if (this.state.scalatedConversationMessages && this.state.scalatedConversation) {
                return (
                    <div>
                        <div style={{ fontSize: "12px", overflowY: "scroll", height: "300px" }}>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th style={{ position: "sticky", display: "flex", top: "0", backgroundColor: "#eee" }}>
                                            <div style={{ width: "85%" }}>Status: {this.state.scalatedConversation.attributes.status} - Escalamiento: {this.state.scalatedConversation.attributes.custom.scalationFormStr}
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.scalatedConversationMessages.filter(conversation => conversation.attributes.preview != "").map(conversation => {
                                            if (conversation.attributes.direction === "in") {
                                                return (
                                                    <tr valign="top">
                                                        <td style={{ borderTop: "1px solid #b9bbbd" }} width="100%">
                                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td >
                                                                            <p style={{ color: "#8c8b8b" }}>{conversation.attributes.createdAt.split(".")[0].replace("T", "  ")}
                                                                            </p>
                                                                            <p style={{ marginBottom: "5px", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{conversation.attributes.preview}
                                                                            </p>{conversation.relationships.hasOwnProperty("attachments") ? conversation.relationships.attachments.data.map(file => <a href={`https://logysto.api.kustomerapp.com/v1/messages/${conversation.id}/attachments/${file.id}?redirect=true`} target="_blank" alt="adjunto"><img src="https://cdn.kustomerhostedcontent.com/media/6185671c5c8df47cc3f6917b/701c07f33f4ee92cd601cc7322913b93.png" style={{ width: "25px" }} /></a>) : ""}
                                                                        </td>
                                                                        <td style={{ width: "40px", verticalAlign: "top" }}>
                                                                            <img style={{ marginTop: "5px", borderRadius: "50%" }} src="https://cdn.kustomerhostedcontent.com/media/6185671c5c8df47cc3f6917b/472516a3d5d7730d77cf3e5678b45d5e.png" alt="" height="40px" width="40px" />
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                );
                                            } else {
                                                return (
                                                    <tr valign="top">
                                                        <td style={{ borderTop: "1px solid #b9bbbd" }} width="100%">
                                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style={{ width: "40px", verticalAlign: "top" }}>
                                                                            <img style={{ marginTop: "5px", borderRadius: "50%" }} src="https://cdn.kustomerhostedcontent.com/media/6185671c5c8df47cc3f6917b/ba85c92469d237bfbc82d9f16e9deea2.png" alt="" height="40px" width="40px" />
                                                                        </td>
                                                                        <td>
                                                                            <p style={{ color: "#8c8b8b" }}>
                                                                                {conversation.attributes.createdAt.split(".")[0].replace("T", "  ")}
                                                                            </p>
                                                                            <p style={{ marginBottom: "5px", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                                                                                {conversation.attributes.preview}
                                                                            </p>
                                                                            {conversation.relationships.hasOwnProperty("attachments") ? conversation.relationships.attachments.data.map(file => <a href={`https://logysto.api.kustomerapp.com/v1/messages/${conversation.id}/attachments/${file.id}?redirect=true`} target="_blank" alt="adjunto"><img src="https://cdn.kustomerhostedcontent.com/media/6185671c5c8df47cc3f6917b/701c07f33f4ee92cd601cc7322913b93.png" style={{ width: "25px" }} />
                                                                            </a>
                                                                            ) : ""
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                );
                                            };
                                        })}</tbody>
                            </table>
                        </div>
                        <div style={{ marginTop: "5px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <input
                                    style={{ width: '95%', border: "none", borderButton: "2px solid #eee" }}
                                    type="text"
                                    id="bodyMessage"
                                    placeholder="Send a message..."
                                    required
                                />
                                <label
                                    style={{ width: "44px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", height: "26px" }}
                                    htmlFor="attachments">📎
                                </label>
                                <button
                                    type="submit"
                                    value="Submit"
                                    style={{ border: "none", width: "80px", textAlign: "center", backgroundColor: "#19a5e4", color: "white", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
                                    onClick={() => { this.sendMessage() }}>Send
                                </button>
                                <input style={{ display: "none" }} id="attachments" label="Attachment"
                                    className="form-field form-field-attachment" hint="Add file here" type="file"
                                    onChange={e => this.setField("attachments", e.target.files[0])} name="file1"
                                />
                            </div>{attachedFiles}
                        </div>
                    </div>
                );
            }; return <p>Cargando...</p>
        };
        return (
            <div>
                <select style={{ width: '95%', "margin-top": "15px" }}
                    onChange={e => this.setField("form", e.target.value)}
                    id="forms">
                    <option disabled hidden selected value="default"> -- select an option --
                    </option>
                    {this.includesTeam()}
                </select>
                {this.renderForm()}
            </div>);
    }
}

export default Scalations;
