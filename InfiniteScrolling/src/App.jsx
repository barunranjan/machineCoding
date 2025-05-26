import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchProduct = async () => {
    setLoading(true)
    try {
      const result = await fetch(`https://dummyjson.com/products?limit=${page * 10}`)
      const data = await result.json()
      setProducts(data)
      setPage(page + 1)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])


  const handleScroll = () => {
    console.log()
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
      document.documentElement.offsetHeight &&
      !loading &&
      products.limit < products.total
    ) {
      fetchProduct();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])



  const { products: productsList } = products

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      {productsList?.length > 0 && (
        <div className="products">
          {productsList?.map((product) => {
            return (
              <div className="products__single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>{product.title}</div>
              </div>
            );
          })}
        </div>
      )}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default App
