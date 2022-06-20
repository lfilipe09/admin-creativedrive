import { CheckCircle, Edit3, Trash2, XCircle } from '@styled-icons/feather'
import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import Modal from 'components/Modal'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import * as S from './styles'

export type TableColumn = {
  [key: string]: (JSX.Element | React.ReactNode | string)[]
}

export type TableEditingColumn = {
  [key: string]: string
}

export type TableProps = {
  data: TableColumn[]
  isEditable?: boolean
  editableFields?: string[]
  onChangeLine?: (user: string, newData: TableEditingColumn) => void
  handleChangeLine?: (user: string) => void
  OnDeleteLine?: (user: string) => void
}

const Table = ({
  data,
  isEditable = false,
  editableFields,
  onChangeLine,
  handleChangeLine,
  OnDeleteLine
}: TableProps) => {
  const [editModeOnIndex, setEditModeOnIndex] = useState(-1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [onDeletionIndex, setOnDeletionIndex] = useState(-1)
  const [tableData, setTableData] = useState<TableColumn[]>(data)
  const [editingData, setEditingData] = useState<TableEditingColumn>({})
  const keys = Object.keys(Object.assign({}, ...tableData))
  const length = tableData[0] && tableData[0][keys[0]].map((cell) => cell)

  function removeByIndex(index: number) {
    const newTable: TableColumn[] = []
    let tempArray = []
    tableData.map((fieldsOfUser, indexMap) => {
      const tempObj: TableColumn = {}
      tempArray = fieldsOfUser[keys[indexMap]].filter(
        (_, indexFilter) => indexFilter !== index
      )
      tempObj[keys[indexMap]] = tempArray
      newTable.push(tempObj)
    })
    setTableData(newTable)
  }

  function UpdateByIndex(index: number) {
    const newTable: TableColumn[] = []
    let tempArray = []
    tableData.map((fieldsOfUser, indexMap) => {
      const tempObj: TableColumn = {}
      tempArray = fieldsOfUser[keys[indexMap]].map((value, indexInnerMap) =>
        indexInnerMap === index &&
        Object.keys(editingData).includes(keys[indexMap])
          ? editingData[keys[indexMap]]
          : value
      )
      tempObj[keys[indexMap]] = tempArray
      newTable.push(tempObj)
    })
    setTableData(newTable)
  }

  useEffect(() => {
    setTableData(data)
  }, [data])

  return (
    <>
      <S.Modal isOpen={isModalOpen}>
        <Modal
          onDelete={() => {
            removeByIndex(onDeletionIndex)
            const emailToDelete: string[] = []
            tableData.map((fieldsOfUser) => {
              // eslint-disable-next-line no-prototype-builtins
              fieldsOfUser.hasOwnProperty('email') &&
                emailToDelete.push(
                  fieldsOfUser['email'][onDeletionIndex] as string
                )
            })
            OnDeleteLine?.(emailToDelete[0])
          }}
          onReturn={() => setIsModalOpen(false)}
        />
      </S.Modal>
      <S.TableWrapper>
        <S.TableHeadLine>
          <S.TableLine>
            {keys.map((title) => (
              <S.TableHead key={title}>{title}</S.TableHead>
            ))}
          </S.TableLine>
        </S.TableHeadLine>
        <S.TableBodyLine>
          {length?.map((_, index) => {
            return (
              <S.TableLine key={v4()}>
                {keys.map((key, indexKey) => (
                  <S.TableCell key={v4()}>
                    {tableData[indexKey] &&
                    typeof tableData[indexKey][key][index] == 'object' ? (
                      <S.ImageWrapper>
                        {tableData[indexKey][key][index]}
                      </S.ImageWrapper>
                    ) : editableFields?.includes(key) &&
                      editModeOnIndex === index ? (
                      key === 'activity' || key === 'perfil' ? (
                        <div style={{ padding: ' 0px 1rem' }}>
                          <Dropdown
                            minimal={true}
                            dropdownHeight={'small'}
                            initialValue={
                              Object.keys(editingData).includes(key)
                                ? editingData[key]
                                : (tableData[indexKey][key][index] as string)
                            }
                            options={
                              key === 'activity'
                                ? ['Ativo', 'Inativo']
                                : ['Administrador', 'Usuário']
                            }
                            onDropdownChange={(value) => {
                              //check if exist value on object
                              const newObj = editingData
                              !Object.keys(newObj).includes(key) &&
                                delete newObj[key]

                              setEditingData({ ...newObj, [key]: value })
                            }}
                          />
                        </div>
                      ) : (
                        <TextField
                          minimal={true}
                          inputHeight={'small'}
                          initialValue={
                            Object.keys(editingData).includes(key)
                              ? editingData[key]
                              : (tableData[indexKey][key][index] as string)
                          }
                          handleOnBlur={(newValue) => {
                            //check if exist value on object
                            const newObj = editingData
                            !Object.keys(newObj).includes(key) &&
                              delete newObj[key]
                            setEditingData({ ...newObj, [key]: newValue })
                          }}
                        />
                      )
                    ) : (
                      tableData[indexKey] && tableData[indexKey][key][index]
                    )}
                  </S.TableCell>
                ))}
                {isEditable &&
                (editModeOnIndex < 0 || index !== editModeOnIndex) ? (
                  <S.TableCell>
                    <S.Icons>
                      <Button
                        icon={<Edit3 strokeWidth={1} width={'1rem'} />}
                        onClick={() => {
                          if (handleChangeLine) {
                            const emailToUpdate: string[] = []
                            tableData.map((fieldsOfUser) => {
                              // eslint-disable-next-line no-prototype-builtins
                              fieldsOfUser.hasOwnProperty('email') &&
                                emailToUpdate.push(
                                  fieldsOfUser['email'][index] as string
                                )
                            })
                            handleChangeLine(emailToUpdate[0])
                          } else {
                            setEditingData({})
                            setEditModeOnIndex(index)
                          }
                        }}
                        iconGrey={true}
                      />
                      <Button
                        icon={<Trash2 strokeWidth={1} width={'1rem'} />}
                        onClick={() => {
                          setOnDeletionIndex(index)
                          setIsModalOpen(true)
                        }}
                        iconGrey={true}
                      />
                    </S.Icons>
                  </S.TableCell>
                ) : (
                  isEditable && (
                    <S.TableCell>
                      <S.Icons>
                        <Button
                          icon={<CheckCircle strokeWidth={1} width={'1rem'} />}
                          onClick={() => {
                            UpdateByIndex(index)
                            const emailToUpdate: string[] = []
                            tableData.map((fieldsOfUser) => {
                              // eslint-disable-next-line no-prototype-builtins
                              fieldsOfUser.hasOwnProperty('email') &&
                                emailToUpdate.push(
                                  fieldsOfUser['email'][index] as string
                                )
                            })
                            onChangeLine?.(emailToUpdate[0], editingData)
                            setEditModeOnIndex(-1)
                          }}
                        />
                        <Button
                          icon={<XCircle strokeWidth={1} width={'1rem'} />}
                          iconGrey={true}
                          onClick={() => {
                            setEditModeOnIndex(-1)
                            setEditingData({})
                          }}
                        />
                      </S.Icons>
                    </S.TableCell>
                  )
                )}
              </S.TableLine>
            )
          })}
        </S.TableBodyLine>
      </S.TableWrapper>
    </>
  )
}

export default Table
