

export const summarizer = (length, content, keywords) => {
    if (  length<=2) {
      return content;
    }
  
    const words = content.split(' ');
   
    let summary = '';
   
  
    for (let i = 0; i < length-2; i++) {
      summary += words[i] + ' ';
    }
    // console.log(summary)
  
  
    return summary.trim() + (summary.length < content.length ? ` ${keywords}...` : '');
  };
  