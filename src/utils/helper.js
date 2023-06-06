export const getFilterVendorList =(value, vendorList)=> {
    return vendorList.filter( vendor => vendor?.company.toLowerCase().includes(value.toLowerCase()))
}