import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 430px;
    height: 420px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    padding: 10px 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    object-fit: contain;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Subtitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding-top: 20px;
    text-align: center !important;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const CertificateCard = ({certificate, setOpenModal}) => {
    return (
        <Card>
            <Image src={certificate.image}/>
            <Tags>
                {certificate.tags?.map((tag, index) => (
                <Tag>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{certificate.title}</Title>
                <Subtitle>{certificate.subTitle}</Subtitle>
            </Details>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default CertificateCard