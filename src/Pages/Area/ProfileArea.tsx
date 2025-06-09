import { Form } from "@components/__common/Form";
import FileDropzone from "@components/__common/Form/UploadArea";
import { Page } from "@components/__common/Page";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { useParams } from "react-router";

export function ProfileAreaPage(){

    const {id} = useParams()

    return (
        <Page.Body className="py-2">
            <Page.Header title={!id?"Cadastro de area":"Avani"} />

           <Page.Main>
                <Page.ScrollY>
                    <form className="flex flex-col w-full gap-5">
                        <div className="flex flex-row relative p-2 bg-gray-100 rounded-[4px]">
                            <Form.Input
                                label="Nome da Area"
                                className="w-[75%]"
                                styleLabel="bg-gray-100"
                            />
                            <Form.Input
                                label="R$ / Hr"
                                className="w-[25%]"
                                styleLabel="bg-gray-100"
                            />
                        </div>

                        <div className="flex flex-col relative p-2 bg-gray-100 rounded-[4px]">
                           <div className="flex flex-row gap-1 w-full">
                                <Form.Input
                                    label="Rua"
                                    styleLabel="bg-gray-100"
                                />
                            <Form.Input
                                    label="Nº"
                                    className="w-[20%]"
                                    styleLabel="bg-gray-100"
                                />
                           </div>

                            <div className="flex flex-row gap-1 w-full">
                                <Form.Input
                                    label="Bairro"
                                    className="w-[56%]"
                                    styleLabel="bg-gray-100"
                                />
                                 
                                <Form.Input
                                    label="Cidade"
                                    className="w-[33%]"
                                    styleLabel="bg-gray-100"
                                />
                                <Form.Input
                                    label="Estado"
                                    className="w-[20%]"
                                    styleLabel="bg-gray-100"
                                />
                            </div>
                            <Form.Input
                                label="Complemento"
                                styleLabel="bg-gray-100"
                                inputStyle="bg-red"
                            />
                        </div>

                        <div>
                           <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                        </div>
                    </form>
                </Page.ScrollY>
           </Page.Main>
        </Page.Body>
    )
}