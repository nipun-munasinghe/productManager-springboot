package com.products.productmanager.service.impl;

import com.products.productmanager.dto.ProductDTO;
import com.products.productmanager.model.Product;
import com.products.productmanager.repository.ProductRepository;
import com.products.productmanager.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;

    @Override
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = modelMapper.map(productDTO, Product.class);
        Product savedProduct = productRepository.save(product);
        return modelMapper.map(savedProduct, ProductDTO.class);
    }

    @Override
    public ProductDTO getProductById(Integer id) {
        Product product = productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Product not found!")
        );
        return modelMapper.map(product, ProductDTO.class);
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        List<ProductDTO> productDTOs = new ArrayList<>();
        for (Product product : products) {
            productDTOs.add(modelMapper.map(product, ProductDTO.class));
        }
        return productDTOs;
    }

    @Override
    public ProductDTO updateProduct(Integer id, ProductDTO productDTO) {
        Product existingProduct = productRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Product not found!")
        );
        //Copy new values from productDTO to that product
        modelMapper.map(productDTO, existingProduct);
        //Save updated product to the database
        Product updatedProduct = productRepository.save(existingProduct);
        //Return the updated version as a DTO
        return modelMapper.map(updatedProduct, ProductDTO.class);
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}