import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { ImPrevious } from "react-icons/im";
import { ImNext } from "react-icons/im";
import Button from "../ui/button";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function ResumeItem({ pdf, pageNumber }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <Container id={`page-${pageNumber}`}>
        <Actions>
          <PageActions>
            <PageNumber>page: {pageNumber}/2</PageNumber>

            <SwitchPage>
              <Button variant="ICON" iconName="prev">
                <ImPrevious />
              </Button>
              <Button variant="ICON" iconName="next">
                <ImNext />
              </Button>
            </SwitchPage>
          </PageActions>

          <Button variant="ICON" iconName="download">
            <AiOutlineDownload />
          </Button>
        </Actions>

        <Document file={pdf}>
          <Page width={800} pageNumber={1} renderAnnotationLayer={true} />
        </Document>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: 800px;
`;

const Actions = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
`;

const PageActions = styled.div`
  display: flex;
`;

const SwitchPage = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 70px;
`;

const PageNumber = styled.p`
  font-size: ${(props) => props.theme.fontSize.m};
  margin-right: 1em;
`;
