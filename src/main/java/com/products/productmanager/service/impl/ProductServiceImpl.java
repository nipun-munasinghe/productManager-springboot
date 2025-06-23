package com.products.productmanager.service.impl;

import com.products.productmanager.dto.ProductDTO;
import com.products.productmanager.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        return null;
    }

    @Override
    public ProductDTO getProductById(Integer id) {
        return null;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        return List.of();
    }

    @Override
    public ProductDTO updateProduct(Integer id, ProductDTO productDTO) {
        return null;
    }

    @Override
    public void deleteProduct(Integer id) {

    }
}
