import React from 'react';
import { Product } from 'src/types/product';
import {
    Grid2
} from '@mui/material';
import ProductCard from 'src/sections/components/product-card';

interface Props {
    items: Product[];
    totalCount: number;
}

export default function ListProductsCards({ items }: Props) {
    return (
        <Grid2 container spacing={2}>
      {items.map((item) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
          <ProductCard product={item} />
        </Grid2>
      ))}
    </Grid2>
    );
}
