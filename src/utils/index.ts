import React from 'react'

export function makeRedirect(path: string, params: { [key: string]: any }, method='post') {
  const form = document.createElement('form')
  form.method = method
  form.action = path

  for (const key in params) {
    if (Object.hasOwnProperty.bind(params)(key)) {
      const hiddenField = document.createElement('input')
      hiddenField.type = 'hidden'
      hiddenField.name = key
      hiddenField.value = params[key]

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

// from https://usehooks.com/useOnScreen/
export function useOnScreen<T extends Element>(ref: React.MutableRefObject<T>, rootMargin: string = "0px"): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = React.useState<boolean>(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}