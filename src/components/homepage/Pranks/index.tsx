import React from 'react'
import styles from './styles.module.scss'
import { Tabs, Skeleton } from 'antd'
import PrankPreview, { Prank } from '@/components/common/Prank'
import { apiURI, fetchAPI } from '@/data/api'
import { CallRecordsResponse, CategoriesResponse, CategoryCallRecordsResponse } from '@/data/ApiDefinitions'
import { useSelector } from 'react-redux'
import { selectAuthState } from '@/store/slices/authState'

type Category = {
  id: number
  title: string
  categoryItems: number
}

export default function Pranks() {
  const [categories, setCategories] = React.useState<null | Category[]>(null)
  const [activeCategory, setActiveCategory] = React.useState<string>('all')
  const [pranks, setPranks] = React.useState<null | Prank[]>(null)
  const authState = useSelector(selectAuthState)

  const mapItems = (categories: Category[]) => {
    return categories.map(category => ({
      key: String(category.id),
      label: <span>{category.title} <span className={styles.counter}>{category.categoryItems}</span></span>
    }))
  }

  React.useEffect(() => { fetchCategories() }, [])

  const fetchCategories = async () => {
    const apiCategoriesRequest = await fetch(apiURI + '/categories')
    // some thoughts on how ts should work with api responses
    // firstly I made namespace PranksAPI but swagger-typescript-api generates
    // exported interfaces instead of types and I have no time until deadline
    // to patch that (TODO:)
    const apiCategoriesResponse = await apiCategoriesRequest.json() as CategoriesResponse
    setCategories(
      apiCategoriesResponse.categories
        .map(c => ({
          id: c.id,
          title: c.name,
          categoryItems: c.numberCallRecords
        }))
    )
    setActiveCategory(String(apiCategoriesResponse.categories[0].id))
  }

  React.useEffect(() => { fetchPranks() }, [activeCategory, categories])

  const fetchPranks = async () => {
    if(categories === null) return
    let callRecordsResponse: CallRecordsResponse | CategoryCallRecordsResponse
    if(activeCategory === 'all') {
      callRecordsResponse = await fetchAPI<CallRecordsResponse>('/call_records', 'GET')
    } else {
      const activeCategoryData = categories.find(c => String(c.id) === activeCategory)
      if(!activeCategoryData) return
      callRecordsResponse = await fetchAPI<CategoryCallRecordsResponse>('/categories/' + activeCategoryData.id + '/call_records', 'GET')
    }
    setPranks(
      callRecordsResponse.callRecords
        .map(cr => ({
          id: String(cr.id),
          title: cr.name,
          statistics: cr.numberOrders,
          previewAudioURL: cr.recordUrl,
          cardBackground: cr.cardBackground
        }))
    )
  }

  return (
    <div className={styles.pranks}>
      <a href="#pranks" id='pranks' style={{ height: 0 }} />
      {authState.sessionRestored && authState.loggedIn && <h1 className={styles.chooseNewPrank}>Выбери новый розыгрыш</h1>}
      {categories
        ? (
          <Tabs
            defaultActiveKey={'all'}
            items={[{ key: 'all', label: 'Все категории' }, ...mapItems(categories)]}
            onChange={(activeKey: string) => setActiveCategory(activeKey)}
            className={styles.tabs}
          />
        ) : (
          <Skeleton />
        )
      }
      <div className={styles.pranksPreviewsList}>
        {categories && (pranks != null) && pranks.map(prank => (
          <PrankPreview
            key={prank.id}
            prank={{
              id: prank.id,
              title: prank.title,
              statistics: prank.statistics,
              previewAudioURL: prank.previewAudioURL === 'https://test.com' ? 'https://www.myinstants.com/media/sounds/auughhh.mp3' : prank.previewAudioURL,
              cardBackground: prank.cardBackground
            }}
          />
        ))}
      </div>
    </div>
  )
}