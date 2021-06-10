import React, { useState } from 'react'
import { ModalContainer, FormContainer, TitleInput, ContentInput, ButtonInput, BackButton } from './styles'

const EditNoteModal = ({ changeModalState, note }) => {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  return <ModalContainer>
    <BackButton onClick={changeModalState}>
      <img src='https://icongr.am/entypo/chevron-small-left.svg?size=20&color=ffffff' alt="Back" />
    </BackButton>
    <FormContainer >
      <TitleInput type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
      <ContentInput cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
      <ButtonInput>Actualizar nota</ButtonInput>
    </FormContainer>
  </ModalContainer>
}

export default EditNoteModal
