import React from 'react'
import './filter.css'
import {ArrowForwardIosOutlined, KeyboardArrowDown} from'@mui/icons-material'
import {
    Accordion,
    AccordionDetails, Checkbox,
    Divider,
    FormControlLabel,
    FormGroup, Slider, TextField,
    Typography/*, AccordionSummary*/
} from '@mui/material'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'

class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosOutlined sx={{fontSize: '36px', color: 'rgba(0, 0, 0, 0.5)'}}/>}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
                'rgba(255, 255, 255, 255)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }))

    handleChange = (panel) => (event, newExpanded) => {
        this.setState({expanded: newExpanded ? panel : false})
    }


    render() {

        return(
            <div className='mainBox' id='box'>
                <Accordion style={{borderRadius: '15px 15px 0 0'}} disableGutters={true}>
                    <this.AccordionSummary className='tile'>
                        <span>Подкатегория</span>
                    </this.AccordionSummary>
                    <AccordionDetails>
                        <FormGroup style={{marginLeft: '20px', fontSize: '14px', fontFamily: 'inter'}}>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Держатели, карнизы, крючки, ёршики</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Зеркала</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Мыльницы, стаканы</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Полки</Typography>}/>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Divider style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                <Accordion disableGutters={true}>
                    <this.AccordionSummary className='tile' aria-controls="panel2a-content">
                        <span>Тип</span>
                    </this.AccordionSummary>
                    <AccordionDetails>
                        <FormGroup style={{marginLeft: '20px', fontSize: '14px', fontFamily: 'inter'}}>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Держатель для туалетной бумаги</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Крючки и вешалки</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Карниз и кольца для штор</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Ёршик для унитаза</Typography>}/>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Divider style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                <Accordion disableGutters={true}>
                    <this.AccordionSummary className='tile' aria-controls="panel3a-content">
                        <span>Цвет</span>
                    </this.AccordionSummary>
                    <AccordionDetails>
                        <FormGroup style={{marginLeft: '20px', fontSize: '14px', fontFamily: 'inter'}}>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Бежевый</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Белый</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Зелёный</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Коричневый</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Слоновая кость</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Чёрный</Typography>}/>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Divider style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                <Accordion disableGutters={true}>
                    <this.AccordionSummary className='tile' aria-controls="panel4a-content">
                        <span>Производитель</span>
                    </this.AccordionSummary>
                    <AccordionDetails>
                        <FormGroup style={{marginLeft: '20px', fontSize: '14px', fontFamily: 'inter'}}>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Тритон</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Esko</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Hansgrohe</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>IDDIS</Typography>}/>
                            <FormControlLabel control={<Checkbox/>} label={<Typography style={{fontSize: '14px', fontFamily: 'inter'}}>Terminus</Typography>}/>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Divider style={{color: 'rgba(0, 0, 0, 0.5)'}}/>
                <Accordion style={{borderRadius: '0 0 15px 15px'}} disableGutters={true}>
                    <this.AccordionSummary style={{borderRadius: '0 0 15px 15px'}} className='tile' aria-controls="panel5a-content">
                        <span>Цена</span>
                    </this.AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={[10, 90]}
                                //onChange={handleChange}
                                valueLabelDisplay="auto"
                                //getAriaValueText={valuetext}
                            />
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '9px'}}>
                                <TextField
                                    style={{width: '96px', borderBottomRightRadius: '11px'}}
                                    label="Минимум"
                                    value={10}
                                />
                                <div style={{height: '2px', width: '20px', background: 'rgb(0, 0, 0, 0.5)'}}/>
                                <TextField
                                    style={{width: '96px', borderBottomRightRadius: '11px'}}
                                    label="Максимум"
                                    value={90}
                                />
                            </div>
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
        )

    }

}

export default Filter