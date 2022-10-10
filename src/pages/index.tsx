import SEO from '@/components/SEO/SEO'
import { HomeWrapper } from '@/styles/pages/Home'
import SignUpModal from '@/components/SignUpModal/SignUpModal'
import { IPageProps, IStaticProps } from '@/utils/Interfaces'
import { getPageStructure } from '@/src/Services/Structure'

export async function getStaticProps(): Promise<IStaticProps> {
  const structure = await getPageStructure()

  return {
    props: { structure },
    revalidate: 60 * 60, // revalidate data in 1 hour
  }
}

export default function Home({ structure }: IPageProps): JSX.Element {
  return (
    <>
      <SEO title="Workwolf Sign Up" description="Workwolf sign up test page" />

      <HomeWrapper>
        <SignUpModal
          jobTitle={structure.jobTitle}
          description={structure.description}
        />
      </HomeWrapper>
    </>
  )
}
