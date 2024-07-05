import React, { useState } from 'react'
import Button from './Button'
import {jsPDF} from 'jspdf'

function Download({textContent}) {

    const [text, setText] = useState(textContent);

    const [format, setFormat] = useState('txt')
    const handleDownload = ()=>{
        let fileContent;
        let fileName = 'dowload.'+format;
        const doc = new jsPDF()
        doc.setFontSize(12);
        let pageWidth = 210 - 20;
        let textLines = doc.splitTextToSize(text,pageWidth) 
        switch(format){
            case 'txt' :
                fileContent = text;
                downloadFile(fileContent,fileName, 'text/plain')
                break;
            case 'json':
                fileContent = JSON.stringify({ content: text }, null, 2);
                downloadFile(fileContent, fileName, 'application/json');
                break;
            case 'csv':
                fileContent = 'Content\n' + text.replace(/\n/g, '\n');
                downloadFile(fileContent, fileName, 'text/csv');
                break;
            case 'pdf':
                    // let doc = new jsPDF()
                   
                doc.text(textLines, 10, 10);
                doc.save(fileName);
                break;
            default:
                alert('Unsupported format');
                return;
            
        }
    }

    const downloadFile = (content, fileName, mimeType) =>{
        const blob = new Blob([content], { type: mimeType });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName; // Set the download attribute to force download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
  return (
    <div className='flex flex-wrap bg-green-00 px-2 py-3 gap-6 justify-center items-center sm:justify-start sm:px-5'>
        {/* <textarea
        rows="10"
        cols="30"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      /> */}
        <select
            id="format"
            value = {format}
            onChange={(e)=>setFormat(e.target.value)}
            className='order-2 px-6 border-teal-700 border-x-2 border-y-2 bg-gray-100 rounded-lg py-4 text-emerald-800 font-bold sm:px-12 '
        >
            <option value = "txt">TXT</option>
            <option value= "pdf">PDF</option>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>

        </select>

        <Button 
        className='order-1 bg-teal-700 py-4 px-5 sm:px-20 text-xl sm:hover:bg-gray-50 sm:hover:border-teal-700 border-x-2 border-y-2 sm:hover:text-teal-700 sm:hover:rounded-full transition-all ease-in-out duration-200'
        onClick={handleDownload}>Download</Button>
    </div>
  )
}

export default Download