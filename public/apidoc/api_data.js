define({ "api": [
  {
    "type": "delete",
    "url": "/:id",
    "title": "Deleta medicamento",
    "name": "deleteMedicamento",
    "group": "Medicamentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Passar",
            "description": "<p>o id. ok</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Vai",
            "description": "<p>retornar True quando deletado.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não foi possível deletar o medicamento\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/medicamentosRoutes.js",
    "groupTitle": "Medicamentos"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "Pegar um unico medicamento.",
    "name": "getByIdMedicamento",
    "group": "Medicamentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Passar",
            "description": "<p>o id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retorna",
            "description": "<p>um medicamento</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"5df5570b1c9d440000f4881a\",\n  \"doença\": \"asma\"\n  \"medicamento\": \"spiriva\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/medicamentosRoutes.js",
    "groupTitle": "Medicamentos"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Pegar todos os medicamentos.",
    "name": "getMedicamentos",
    "group": "Medicamentos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todos os medicamentos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"5df5570b1c9d440000f4881a\",\n  \"doença\": \"asma\"\n  \"medicamento\": \"spiriva\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/medicamentosRoutes.js",
    "groupTitle": "Medicamentos"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Adicionar dados.",
    "name": "postMedicamentos",
    "group": "Medicamentos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retorna",
            "description": "<p>o novo medicamento.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"5df5570b1c9d440000f4881a\",\n  \"doença\": \"asma\"\n  \"medicamento\": \"spiriva\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"message\": \"Não foi possível adicionar\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/medicamentosRoutes.js",
    "groupTitle": "Medicamentos"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "Ele altera o medicamento.",
    "name": "putMedicamento",
    "group": "Medicamentos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Passar",
            "description": "<p>o id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Vai",
            "description": "<p>retornar o que alterou no medicamento, leia a bula antes de usar o medicamento!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\"id\": \"5df556c81c9d440000f48818\",\n\t\"doença\": \"depressão\",\n\t\"medicamento\": \"sertralina\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Não foi possível alterar o medicamento\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/medicamentosRoutes.js",
    "groupTitle": "Medicamentos"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "Deletar paciente.",
    "name": "deletePaciente",
    "group": "Pacientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passar",
            "description": "<p>o id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Vai",
            "description": "<p>remover a id de um paciente.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \" Medicamento removido com sucesso!\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 204 NO CONTENT\n{\n  \"message\": \"ID não encontrado\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/pacientesRoutes.js",
    "groupTitle": "Pacientes"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "Pegar um unico paciente",
    "version": "0.1.0",
    "name": "getByIdPaciente",
    "group": "Pacientes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retorna",
            "description": "<p>um unico paciente pelo id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"paciente\": \"Aline\"\n  \"idade\": \"30\"\n  \"tiposanguineo\": \"O+\"\n  \"cpf\": \"9472247294828\"       \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/pacientesRoutes.js",
    "groupTitle": "Pacientes"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Listar ou pegar pacientes.",
    "version": "0.1.0",
    "name": "getPacientes",
    "group": "Pacientes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Vai",
            "description": "<p>puxar os dados dos pacientes e outras informações.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": \"1\",\n  \"paciente\": \"Aline\"\n  \"idade\": \"30\"\n  \"tiposanguineo\": \"O+\"\n  \"cpf\": \"9472247294828\"       \n}]",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/pacientesRoutes.js",
    "groupTitle": "Pacientes"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Adiciona um paciente",
    "version": "0.1.0",
    "name": "postPaciente",
    "group": "Pacientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passar",
            "description": "<p>o id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retorna",
            "description": "<p>o paciente cadastrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"paciente\": \"Aline\"\n  \"idade\": \"30\"\n  \"tiposanguineo\": \"O+\"\n  \"cpf\": \"9472247294828\"       \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/pacientesRoutes.js",
    "groupTitle": "Pacientes"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "Altera o paciente",
    "version": "0.1.0",
    "name": "putPaciente",
    "group": "Pacientes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "passar",
            "description": "<p>o id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Retorna",
            "description": "<p>o paciente alterado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"paciente\": \"Aline\"\n  \"idade\": \"30\"\n  \"tiposanguineo\": \"O+\"\n  \"cpf\": \"9472247294828\"       \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/pacientesRoutes.js",
    "groupTitle": "Pacientes"
  }
] });
