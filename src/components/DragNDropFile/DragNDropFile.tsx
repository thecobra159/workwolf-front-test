import {
  DragNDropFileBox,
  DragNDropFileBoxText,
  DragNDropFileTitle,
  DragNDropFileWrapper,
} from '@/styles/components/DragNDropFile/DragNDropFile'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import UploadIcon from '../../../public/Icons/upload.svg'

export function DragNDropFile(): JSX.Element {
  const [file, setFile] = useState<File>(null)
  const onDrop = useCallback(acceptedFiles => setFile(acceptedFiles[0]), [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <>
      <DragNDropFileTitle>Upload Resume (Optional)</DragNDropFileTitle>
      <DragNDropFileWrapper {...getRootProps()}>
        <input {...getInputProps()} />
        <DragNDropFileBox>
          {!file && (
            <>
              <UploadIcon />
              <DragNDropFileBoxText>
                Drag your file here or <strong>Browse</strong>
              </DragNDropFileBoxText>
              <DragNDropFileBoxText className="description">
                PDF or Word Document (.doc, .docx), smaller than 5 MB
              </DragNDropFileBoxText>
            </>
          )}
          {file && <DragNDropFileBoxText>{file.name}</DragNDropFileBoxText>}
        </DragNDropFileBox>
      </DragNDropFileWrapper>
    </>
  )
}
