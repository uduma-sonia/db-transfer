import { ReqConfig, Service } from 'types/api'

function databaseService({ api }: Service) {
  type ImportMySql = {
    user: string
    password: string
    hostname: string
    port: string
    database: string
    id: string
  }
  const importMySql = async (data: ImportMySql, reqConfig?: ReqConfig) => {
    const result = api.post(`/mysql-import`, data, {
      ...reqConfig,
    })
    return result
  }

  const exportMySql = async (data: ImportMySql, reqConfig?: ReqConfig) => {
    const result = api.post(`/mysql-export`, data, {
      ...reqConfig,
    })
    return result
  }

  return Object.freeze({
    importMySql,
    exportMySql,
  })
}

export default databaseService
