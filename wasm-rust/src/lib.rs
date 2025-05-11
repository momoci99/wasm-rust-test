use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sort_array(mut input: Vec<u32>) -> Vec<u32> {
    input.sort_unstable();
    input
}
