// extract portion of file name

/*
You have to extract a portion of the file name as follows:

- Assume it will start with date represented as long number
- Followed by an underscore
- You'll have then a filename with an extension
- it will always have an extra extension at the end

Inputs:

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2

Outputs

FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar

Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.
*/

function extractFileName(dirtyFileName) {
  return dirtyFileName.split("_").slice(1).join("_").split(".").slice(0,2).join(".")
}
// return dirtyFileName.replace(/(\d)/g, "").slice(1).split(".").slice(0,2).join(".")

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.split("_").slice(1).join("_").split(".").slice(0,2).join(".")
    }
}

console.log(extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34")); // "FILE_NAME.EXTENSION"
console.log(extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION")); // "FILE_NAME.EXTENSION"



class FileNameExtractor {

  static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];

}



class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        var numSlice = dirtyFileName.indexOf('_')
        var extSlice = dirtyFileName.lastIndexOf('.')
        dirtyFileName = dirtyFileName.slice(numSlice+1, extSlice)
        return dirtyFileName
    }
}




class FileNameExtractor {
    static extractFileName (dFN) {
        // pfft who needs REGEXZzz... :)
        return dFN.slice(dFN.indexOf('_') + 1, dFN.lastIndexOf('.'));
    }
}



class FileNameExtractor {
    static extractFileName (s) {
        return s.replace(/^\d*_(.*)\..*$/,'$1');
    }
}



class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        const regex = /\_(.*)\./;
        return regex.exec(dirtyFileName)[1];
    }
}



var FileNameExtractor={extractFileName(dirtyFileName) {
    return dirtyFileName.match( /(?<=^\d+_)[\w-]+\.[\w-]+(?=\..+$)/s )[0];
}}



var FileNameExtractor={extractFileName(dirtyFileName) {
    return dirtyFileName.match( /(?<=^\d+_)[\w-]+\.[\w-]+(?=\..+$)/s )[0];
}}



class FileNameExtractor {
	static extractFileName(dirtyFileName) {
		return dirtyFileName.replace(/^[0-9]+_/, '').replace(/.[A-Za-z0-9]+$/, '');
	}
}



class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        return dirtyFileName.match(/\_[^\.]+\.[^\.]+/)[0].slice(1);
    }
}
