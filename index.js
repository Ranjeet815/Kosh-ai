const XLSX = require('xlsx')
const students = [
    {AccontNumber: "20013038332", SystemProcessingDate: "17/04/2022", BranchCode: 9001, Description: "IMPS OUT,IMPS/210701000145",Debits:"4999",Credits:" ",
    EndingBalance: "29543722.92",Flag: " ", Descriptiona: "IMPSOUT,IMPS" },
    { AccontNumber: " 20013038332", SystemProcessingDate: "17/04/2022", BranchCode: 9001, Description: "IMPS OUT,IMPS/210701000145",Debits:'499999',Credits:"444",
    EndingBalance: "29543672.92",Flag:"FEE CHG",Descriptiona: "FEE CHG,IMPS Charges"}
]

const convertJsonToExcel = () => {

    const workSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "students")
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "studentsData.xlsx")

}
convertJsonToExcel()