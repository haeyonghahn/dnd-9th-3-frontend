import Typography from "@/foundations/Typography";
import Button from "../Button";
import { colors } from "@/_shared/colors";
import { useDeleteRecord } from "@/hooks/api/useFetchRecord";
import { Container, Wrapper } from "./DeleteRecordPopUp.styled";

const DeleteRecordPopUp = ({ ...props }) => {
  const { mutate: deleteRecordMutate } = useDeleteRecord();
  const deleteClick = () => {
    deleteRecordMutate(props.deleteRecordNumber);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Typography text="삭제하시겠습니까?" type="h2" />
          <Typography
            text="삭제된 이미지와 글은 복구가 불가능합니다."
            type="h2"
          />
        </Wrapper>
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
      </Container>
    </>
  );
};

export default DeleteRecordPopUp;
