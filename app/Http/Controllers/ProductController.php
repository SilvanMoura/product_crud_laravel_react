<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function addProduct(Request $request){
        $product = new Product();

        $product->name = $request->name;
        $product->description = $request->description;

        if($request->photo != ""){
            $strpos = strpos($reques->photo, ';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/', $sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(117,600);
            $upload_path = public_path()."/upload/";
            $img->save($upload_path.$name);
            $product->photo = $name;
        }else{
            $product->photo = "image.png";
        }

        $product->photo = $name;
        $product->type = $request->type;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->save();
    }
}
