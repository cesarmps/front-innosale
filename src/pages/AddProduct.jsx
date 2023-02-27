import React from "react";
import SideBar from "../components/sideBar/SideBar";
import "./addProduct.css";
import SearchBar from "../components/searchBar/SearchBar";
import { useForm } from "react-hook-form";

export const AddProduct = () => {
  //con esto almacenamos en data el producto nuevo que hemos añadido

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <SearchBar />
      <div className="inno_home_container_ap">
      <SideBar />
      <div className="inno_home_principal_ap">
        <form
          className="inno_form_addproduct"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="inno_form_ap_all">
            <label>NAME</label>
            <input
            className="inno_input"
              type="text"
              name="productName"
              {...register("productName", { required: true })}
            />
          </div>
          {errors.productName && errors.productName.type === "required" && (
            <p className="inno_addform_errorsMsg">Product name is required</p>
          )}
          <div className="inno_form_catprice">
            <div className="inno_form_cat">
              <label>CATEGORY</label>
              <select {...register("category")}>
                <option value="api">API</option>
                <option value="component">Component</option>
                <option value="library">Library</option>
                <option value="mobileApp">Mobile App</option>
                <option value="webApp">Web App</option>
                <option value="webServie">Web Service</option>
              </select>
            </div>
            <div className="inno_form_price">
              <label>PRICE</label>
              <input
              className="inno_input"
                type="number"
                {...register("price", { required: true, min: 1 })}
              />
              {errors.price && errors.price.type === "required" && (
                <p className="inno_addform_errorsMsg">Price is required</p>
              )}
            </div>
          </div>
          <div className="inno_form_ap_all">
            <label>LICENSE TYPE</label>
            <input
            className="inno_input"
              type="text"
              {...register("licenseType", { required: true })}
            />
          </div>
          {errors.licenseType && errors.licenseType.type === "required" && (
            <p className="inno_addform_errorsMsg">License type is required</p>
          )}
          <div className="inno_form_ap_all">
            <label>DESCRIPTION</label>
            <input
            className="inno_input"
              type="text"
              {...register("description", { required: true })}
            />
          </div>
          <div className="inno_form_ap_all">
            <label>FEATURE</label>
            <input className="inno_input" type="text" {...register("feature", { required: false })} />
            <label>VALUE</label>
            <input
            className="inno_input"
              type="text"
              {...register("featureValue", { required: false })}
            />
          </div>
          <div className="inno_form_price">
            <label>IMAGE</label>
            <input type="file" className="inno_input" id="file-selector" multiple></input>
            <label>ADDITIONAL DOCUMENTS</label>
            <input type="file" className="inno_input" id="file-selector" multiple></input>
          </div>
          <div>
            <button type="submit">ADD PRODUCT</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};
