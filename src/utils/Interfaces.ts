export interface IWorkwolfStructureAPI {
  jobLinkId: string
  code: string
  jobTitle: string
  description: string
  companyCountry: string
  companyCity: string
  companyProvince: string
  workModel: string
  companyOrName: string
  active: string
}

export interface IPageProps {
  structure: IWorkwolfStructureAPI
}

export interface IStaticProps {
  props: IPageProps
  revalidate: number
}
