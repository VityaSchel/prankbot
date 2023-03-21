import React from 'react'
import styles from './styles.module.scss'
import { Tabs, Skeleton } from 'antd'
import PrankPreview, { Prank } from '@/components/common/Prank'

type Category = {
  id: number
  title: string
  categoryItems: number
}

export default function Pranks() {
  const [categories, setCategories] = React.useState<null | Category[]>(null)
  const [activeCategory, setActiveCategory] = React.useState(0)
  const [pranks, setPranks] = React.useState<null | Prank[]>(null)

  const mapItems = (categories: Category[]) => {
    return categories.map(category => ({
      key: String(category.id),
      label: category.title
    }))
  }

  React.useEffect(() => {
    setTimeout(() => {
      setCategories([
        {
          id: 0,
          title: 'Test',
          categoryItems: 91
        },
        {
          id: 1,
          title: 'Foo',
          categoryItems: 37
        },
        {
          id: 2,
          title: 'Bar',
          categoryItems: 11
        },
      ])
    }, 1000)
    setPranks(new Array(Math.floor(Math.random()*50)+10)
      .fill(null)
      .map(() => ({
        id: String(Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)),
        title: 'Название розыгрыша',
        statistics: Math.floor(Math.random()*300)
      }))
    )
  }, [])

  return (
    <div className={styles.pranks}>
      {categories 
        ? (
          <Tabs 
            defaultActiveKey={String(categories[0].id)}
            items={mapItems(categories)}
            onChange={(activeKey: string) => setActiveCategory(Number(activeKey))}
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
            }}
          />
        ))}
      </div>
    </div>
  )
}