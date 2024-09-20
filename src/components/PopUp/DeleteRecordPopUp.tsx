import Typography from "@/foundations/Typography";
import Button from "../Button";
import { colors } from "@/_shared/colors";
import { useDeleteRecord } from "@/hooks/api/useFetchRecord";

const DeleteRecordPopUp = ({ ...props }) => {
  const { mutate: deleteRecordMutate } = useDeleteRecord();
  const deleteClick = () => {
    deleteRecordMutate(props.deleteRecordNumber);
  };
  return (
    <>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div
          style={{
            marginBottom: "7%",
            marginTop: "10%",
            textAlign: "left",
          }}
        >
          <Typography text="삭제하시겠습니까?" type="h2" />
          <Typography
            text="삭제된 이미지와 글은 복구가 불가능합니다."
            type="h2"
          />
        </div>
        <div>
          <Button
            width="100%"
            text="삭제하기"
            color={colors.white}
            bordercolor={colors.inputTextClor}
            backgroundcolor={colors.gray850}
            none="true"
            onClick={deleteClick}
          />
        </div>
      </div>
    </>
  );
};

export default DeleteRecordPopUp;
