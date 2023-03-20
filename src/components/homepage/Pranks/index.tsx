import { Tabs, Skeleton } from 'antd'
import React from 'react'

type Category = {
  id: number
  title: string
  categoryItems: number
}

export default function Pranks() {
  const [categories, setCategories] = React.useState<null | Category[]>(null)
  const [activeCategory, setActiveCategory] = React.useState(0)

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
  }, [])

  return (
    <div>
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
    </div>
  )
}