import React, { useState, useEffect} from 'react';
import { TextField, ListItem, ListItemText } from "@material-ui/core/";

const products = () => [
  "apple",
  "banana",
  "orange",
  "cheese cake",
  "banana cake",
  "apple juice",
  "orange juice"
];

const ListItems = (props) => (
  <ListItem alignItems="center" divider>
    <ListItemText primary={props.text} />
  </ListItem>
);

const SearchProducts = () => {
  
  const [keyword, setKeyword] = useState("");
  const [showLists, setShowLists] = useState(false);
  const [filteredProducts, setfilteredProducts] = useState(products);
  

    useEffect(() => {
      if(keyword === "") {
        setfilteredProducts(products);
        return;
      }
      
      const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g);
      
      const result = products.filter((product) => {
        searchKeywords.every((kw) => product.toLowerCase().indexOf(kw) !== -1)
      });
      
      setfilteredProducts(result.length ? result : ["No Item Found"]);
    },[keyword]);
  return (
    <div>
      <TextField
        id="field"
        color="secondary"
        variant="outlined"
        label="enter keywords"
        onChange={(e) => setKeyword(e.target.value)}
        onClick={() => setShowLists(true)}
      />
      {showLists &&
        filteredProducts.map((v, i) => <ListItems key={i} text={v} />)}
    </div>
  )
}

export default SearchProducts
