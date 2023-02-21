import { ReqConfig, Service } from 'types/api'

function databaseService({ api }: Service) {
  type ImportPSql = {
    user: string
    password: string
    hostname: string
    port: string
    database: string
    id: string
  }
  const importPSql = async (data: ImportPSql, reqConfig?: ReqConfig) => {
    const result = api.post(`/psql-import`, data, {
      ...reqConfig,
    })
    return result
  }

  const exportPSql = async (data: ImportPSql, reqConfig?: ReqConfig) => {
    const result = api.post(`/psql-export`, data, {
      ...reqConfig,
    })
    return result
  }

  return Object.freeze({
    importPSql,
    exportPSql,
  })
}

export default databaseService
