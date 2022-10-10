import { IWorkwolfStructureAPI } from '@/utils/Interfaces'
import { UsefulLinks } from '../utils/Constants'

export const getPageStructure = async (): Promise<IWorkwolfStructureAPI> => {
  try {
    const response = await fetch(UsefulLinks.API)

    return (await response.json()) as IWorkwolfStructureAPI
  } catch (_) {
    return null
  }
}
