import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeContextProvider } from '@/lib'
import { PageShell } from '@/components'
import { Landing, Features, Pricing, About, Contact, Demo, NotFound } from '@/pages'

export const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageShell />}>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
