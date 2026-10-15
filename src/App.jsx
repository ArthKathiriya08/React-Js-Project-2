import { useState, useMemo } from "react";

// Mock product dataset
const productsData = [
  { id: 1, name: "iPhone 16", price: 70000, category: "Mobile" },
  { id: 2, name: "Samsung Galaxy S24", price: 65000, category: "Mobile" },
  { id: 3, name: "HP Pavilion", price: 60000, category: "Laptop" },
  { id: 4, name: "Dell Inspiron", price: 55000, category: "Laptop" },
  { id: 5, name: "Boat Headphones", price: 2000, category: "Accessories" },
  { id: 6, name: "OnePlus 12", price: 58000, category: "Mobile" },
  { id: 7, name: "Lenovo IdeaPad", price: 48000, category: "Laptop" },
  { id: 8, name: "Sony Headphones", price: 5000, category: "Accessories" },
  { id: 9, name: "Redmi Note 13", price: 18000, category: "Mobile" },
  { id: 10, name: "Asus VivoBook", price: 52000, category: "Laptop" },
  { id: 11, name: "Realme 12 Pro", price: 25000, category: "Mobile" },
  { id: 12, name: "Acer Aspire", price: 45000, category: "Laptop" },
  { id: 13, name: "Logitech Mouse", price: 800, category: "Accessories" },
  { id: 14, name: "Google Pixel 8", price: 60000, category: "Mobile" },
  { id: 15, name: "MacBook Air", price: 95000, category: "Laptop" },
  { id: 16, name: "JBL Speaker", price: 3500, category: "Accessories" },
  { id: 17, name: "Vivo V30", price: 30000, category: "Mobile" },
  { id: 18, name: "MSI Gaming Laptop", price: 85000, category: "Laptop" },
  { id: 19, name: "Samsung Tablet", price: 30000, category: "Tablet" },
  { id: 20, name: "Apple AirPods", price: 15000, category: "Accessories" },
  { id: 21, name: "iPhone 15", price: 60000, category: "Mobile" },
  { id: 22, name: "Samsung Galaxy A55", price: 40000, category: "Mobile" },
  { id: 23, name: "HP Victus", price: 75000, category: "Laptop" },
  { id: 24, name: "Dell XPS", price: 120000, category: "Laptop" },
  { id: 25, name: "Kingston SSD", price: 4000, category: "Accessories" },
  { id: 26, name: "Nothing Phone 2", price: 35000, category: "Mobile" },
  { id: 27, name: "Lenovo ThinkPad", price: 70000, category: "Laptop" },
  { id: 28, name: "Canon Camera", price: 45000, category: "Camera" },
  { id: 29, name: "Motorola Edge 50", price: 28000, category: "Mobile" },
  { id: 30, name: "Asus ROG", price: 110000, category: "Laptop" },
  { id: 31, name: "iPad Air", price: 60000, category: "Tablet" },
  { id: 32, name: "Logitech Keyboard", price: 2500, category: "Accessories" },
  { id: 33, name: "Oppo Reno 11", price: 30000, category: "Mobile" },
  { id: 34, name: "Acer Nitro", price: 80000, category: "Laptop" },
  { id: 35, name: "Nikon Camera", price: 55000, category: "Camera" },
  { id: 36, name: "Redmi Pad", price: 18000, category: "Tablet" },
  { id: 37, name: "iPhone 14", price: 45000, category: "Mobile" },
  { id: 38, name: "Samsung Galaxy S23", price: 50000, category: "Mobile" },
  { id: 39, name: "HP Chromebook", price: 30000, category: "Laptop" },
  { id: 40, name: "Dell Latitude", price: 65000, category: "Laptop" },
  { id: 41, name: "TP-Link Router", price: 1800, category: "Accessories" },
  { id: 42, name: "Realme Narzo", price: 15000, category: "Mobile" },
  { id: 43, name: "MacBook Pro", price: 180000, category: "Laptop" },
  { id: 44, name: "Samsung Galaxy Tab", price: 40000, category: "Tablet" },
  { id: 45, name: "GoPro Camera", price: 35000, category: "Camera" },
  { id: 46, name: "Vivo T3", price: 20000, category: "Mobile" },
  { id: 47, name: "Lenovo Legion", price: 100000, category: "Laptop" },
  { id: 48, name: "Amazon Fire Tablet", price: 12000, category: "Tablet" },
  { id: 49, name: "SanDisk Pendrive", price: 700, category: "Accessories" },
  { id: 50, name: "Google Pixel 7", price: 40000, category: "Mobile" },
  { id: 51, name: "Asus Zenbook", price: 90000, category: "Laptop" },
  { id: 52, name: "Sony Camera", price: 80000, category: "Camera" },
  { id: 53, name: "OnePlus Nord", price: 30000, category: "Mobile" },
  { id: 54, name: "HP Envy", price: 85000, category: "Laptop" },
  { id: 55, name: "Apple Watch", price: 30000, category: "Accessories" },
  { id: 56, name: "Samsung Galaxy M35", price: 20000, category: "Mobile" },
  { id: 57, name: "Dell G15", price: 90000, category: "Laptop" },
  { id: 58, name: "Xiaomi Smart Band", price: 3500, category: "Accessories" },
  { id: 59, name: "iPad Mini", price: 45000, category: "Tablet" },
  { id: 60, name: "Realme Buds", price: 2500, category: "Accessories" },
  { id: 61, name: "iPhone 13", price: 40000, category: "Mobile" },
  { id: 62, name: "Samsung Galaxy A35", price: 30000, category: "Mobile" },
  { id: 63, name: "HP EliteBook", price: 80000, category: "Laptop" },
  { id: 64, name: "Dell Vostro", price: 50000, category: "Laptop" },
  { id: 65, name: "JBL Earbuds", price: 3000, category: "Accessories" },
  { id: 66, name: "OnePlus 11", price: 45000, category: "Mobile" },
  { id: 67, name: "Lenovo Yoga", price: 75000, category: "Laptop" },
  { id: 68, name: "Canon EOS R50", price: 60000, category: "Camera" },
  { id: 69, name: "Redmi Note 12", price: 14000, category: "Mobile" },
  { id: 70, name: "Acer Swift", price: 65000, category: "Laptop" },
  { id: 71, name: "iPad Pro", price: 100000, category: "Tablet" },
  { id: 72, name: "Logitech Webcam", price: 4500, category: "Accessories" },
  { id: 73, name: "Vivo Y200", price: 22000, category: "Mobile" },
  { id: 74, name: "Asus TUF Gaming", price: 85000, category: "Laptop" },
  { id: 75, name: "Nikon Z50", price: 70000, category: "Camera" },
  { id: 76, name: "Samsung Galaxy S22", price: 35000, category: "Mobile" },
  { id: 77, name: "MacBook Pro M3", price: 200000, category: "Laptop" },
  { id: 78, name: "Realme Pad", price: 16000, category: "Tablet" },
  { id: 79, name: "Corsair Keyboard", price: 6000, category: "Accessories" },
  { id: 80, name: "Motorola G84", price: 18000, category: "Mobile" },
  { id: 81, name: "HP ProBook", price: 65000, category: "Laptop" },
  { id: 82, name: "Dell Alienware", price: 180000, category: "Laptop" },
  { id: 83, name: "Sony Alpha Camera", price: 120000, category: "Camera" },
  { id: 84, name: "Oppo A79", price: 19000, category: "Mobile" },
  { id: 85, name: "Samsung Galaxy Tab S9", price: 75000, category: "Tablet" },
  { id: 86, name: "Anker Power Bank", price: 2500, category: "Accessories" },
  { id: 87, name: "Google Pixel 8a", price: 45000, category: "Mobile" },
  { id: 88, name: "Lenovo LOQ", price: 70000, category: "Laptop" },
  { id: 89, name: "Xiaomi Pad 6", price: 26000, category: "Tablet" },
  { id: 90, name: "Razer Mouse", price: 5000, category: "Accessories" },
  { id: 91, name: "iPhone 12", price: 30000, category: "Mobile" },
  { id: 92, name: "Asus ExpertBook", price: 60000, category: "Laptop" },
  { id: 93, name: "GoPro Hero 12", price: 40000, category: "Camera" },
  { id: 94, name: "Samsung Galaxy A25", price: 25000, category: "Mobile" },
  { id: 95, name: "Acer Predator", price: 130000, category: "Laptop" },
  { id: 96, name: "Apple Pencil", price: 10000, category: "Accessories" },
  { id: 97, name: "Nothing Phone 2a", price: 23000, category: "Mobile" },
  { id: 98, name: "Dell Precision", price: 150000, category: "Laptop" },
  { id: 99, name: "Samsung Galaxy Tab A9", price: 15000, category: "Tablet" },
  {
    id: 100,
    name: "Sony Bluetooth Speaker",
    price: 7000,
    category: "Accessories",
  },
];

function App() {
  // Table and filter states
  const [products, setProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Add product form state
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Edit product form state
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const itemsPerPage = 10;

  // Filter products by name and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchName.trim().toLowerCase());

      const categoryMatch = product.category
        .toLowerCase()
        .includes(searchCategory.trim().toLowerCase());

      return nameMatch && categoryMatch;
    });
  }, [products, searchName, searchCategory]);

  // Sort filtered products
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.id - b.id;
    });
  }, [filteredProducts, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Search by product name
  const handleSearchName = (value) => {
    setSearchName(value);
    setCurrentPage(1);
  };

  // Search by category
  const handleSearchCategory = (value) => {
    setSearchCategory(value);
    setCurrentPage(1);
  };

  // Sort option change
  const handleSort = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  // Add a new product
  const addProduct = () => {
    const price = Number(newPrice);

    if (!newName.trim() || !newCategory.trim() || !newPrice || !Number.isFinite(price) || price <= 0) {
      alert("Enter a product name, a category, and a price greater than 0.");
      return;
    }

    const newProduct = {
      id: Math.max(0, ...products.map((product) => product.id)) + 1,
      name: newName.trim(),
      price,
      category: newCategory.trim(),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewName("");
    setNewPrice("");
    setNewCategory("");
    setCurrentPage(1);
  };

  // Delete product by id
  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );

    if (editId === id) {
      cancelEdit();
    }

    setCurrentPage(1);
  };

  // Open edit mode
  const startEdit = (product) => {
    setEditId(product.id);
    setEditName(product.name);
    setEditPrice(String(product.price));
    setEditCategory(product.category);
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
    setEditPrice("");
    setEditCategory("");
  };

  // Save edited product
  const updateProduct = () => {
    const price = Number(editPrice);

    if (!editName.trim() || !editCategory.trim() || !editPrice || !Number.isFinite(price) || price <= 0) {
      alert("Enter a product name, a category, and a price greater than 0.");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editId
          ? {
              ...product,
              name: editName.trim(),
              price,
              category: editCategory.trim(),
            }
          : product
      )
    );

    cancelEdit();
    setCurrentPage(1);
  };

  // Reset search and sort
  const resetFilters = () => {
    setSearchName("");
    setSearchCategory("");
    setSortBy("");
    setCurrentPage(1);
  };

  // Change page
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Page Title & Count */}
      <h1>Product Data Table</h1>

      <p>Total products: {products.length}</p>
      <p>Matching products: {sortedProducts.length}</p>

      {/* Add Product Section */}
      <h3>Add Product</h3>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Product name"
          aria-label="New product name"
        />
        <input
          type="number"
          min="0.01"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Price"
          aria-label="New product price"
        />
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category"
          aria-label="New product category"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Search and Sort Section */}
      <h3>Search and Sort</h3>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchName}
          onChange={(e) => handleSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by category"
          value={searchCategory}
          onChange={(e) => handleSearchCategory(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="">Default order (ID)</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>

      {/* Products Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>₹{product.price.toLocaleString("en-IN")}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => startEdit(product)} style={{ marginRight: "8px" }}>
                      Edit
                    </button>
                    <button onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Product Section */}
      {editId !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Product</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <input
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Product name"
              aria-label="Edit product name"
            />
            <input
              type="number"
              min="0.01"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Price"
              aria-label="Edit product price"
            />
            <input
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              placeholder="Category"
              aria-label="Edit product category"
            />
            <button onClick={updateProduct}>Update Product</button>
            <button onClick={cancelEdit}>Cancel</button>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: "15px", display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1 || totalPages === 0}
        >
          Previous
        </button>

        <span>Page {totalPages === 0 ? 0 : currentPage} of {totalPages}</span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>

      {/* Showing Count Information */}
      <p>
        Showing {currentProducts.length > 0 ? startIndex + 1 : 0}
        {" - "}
        {startIndex + currentProducts.length} of {sortedProducts.length} matching products
      </p>
    </div>
  );
}

export default App;