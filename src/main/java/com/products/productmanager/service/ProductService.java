package com.products.productmanager.service;

import com.products.productmanager.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO getProductById(Integer id);
    List<ProductDTO> getAllProducts();
    ProductDTO updateProduct(Integer id, ProductDTO productDTO);
    void deleteProduct(Integer id);
}