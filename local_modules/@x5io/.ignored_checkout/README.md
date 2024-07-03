# Checkout

Универсальный компонент для интеграции окна оплаты

## Требования

1. React 18.0.0 и выше
2. Поддержка MUI (обратите внимание на [SSR](https://mui.com/material-ui/guides/server-rendering/))

## Установка

1. Следуйте инструкциям в <https://gitlab.com/x5.io_npmjs_components/getting-started>, чтобы получить доступ к компоненту на npmjs.com
2. `npm install @x5io/checkout`
3. Компонент использует шрифт Gilroy

## Использование

```tsx
const checkoutRef = React.useRef<Checkout/RefProperties>()
checkoutRef.current.initialize()

<Checkout
  ref={checkoutRef}
  color={'#0000ff'}
  onRequest={async (cryptogram: string) => {
    await fetch('some.api', { body: cryptogram })
    return true
    // or, if failed,
    return false
  }}
/>
```

## Пропы

```ts
type CheckoutProps = {
  /** ClassName of wrapping div */
  wrapClassName?: string
  /** Brand color applied to all elements; can be any color allowed in CSS */
  color?: string
  labels?: {
    /** Defaults to "Оплата" */
    header?: string
    /** Button label, defaults to "Оплатить " */
    pay?: string
  }
  subject: {
    /** Public ID from CloudPayments provider */
    publicID: string
    /** Human-readable title */
    name: string
    /** Price in any string format */
    price: string
  }
  components?: {
    header?: React.ReactNode
  }
  /** Fires when user entered their payment details, request to API must be made and return true|false indicating whether it was successfull */
  onRequest: (cryptogram: string) => Promise<boolean>
  /** Fires when user cancel payment (e.g. closes dialog with 'X' button) */
  onCancel?: () => any
  /** Fires when payment was processed succesfully and user wish to return */
  onSuccess?: () => any
  /** Fires when payment was failed and user wish to return */
  onFailed?: () => any
}
```

## Сборка

1. Прочитайте общие инструкции в <https://gitlab.com/x5.io_npmjs_components/getting-started>
2. Сборка с TypeScript: `npm run build`
3. (Не рекомендуется) Сборка, игнорируя ошибки tsc: `npx vite build`