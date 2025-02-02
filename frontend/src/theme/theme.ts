'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial, sans-serif', // Устанавливаем глобальный шрифт
    },
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.MuiInputLabel-root": {
                        paddingLeft: "5px",
                        color: "#1f1e1c",
                        fontWeight: 700,
                        fontSize: "14px",
                        "&.Mui-focused": {
                            transform: "translate(14px, 0px) scale(0.75)",
                            color: "#1f1e1c",
                            fontWeight: 700,
                            fontSize: "13px",
                        }
                    },
                    "&.MuiInputLabel-shrink": {
                        transform: "translate(14px, 0px) scale(0.75)",
                        paddingLeft: "5px",
                        fontSize: "13px"
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.MuiOutlinedInput-root": {     
                        "&.MuiSelect-root": {
                            borderRadius: "50px"
                        }
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    "legend": {
                        maxWidth: '0'
                    },
                    border: "1px solid #eeeeee", // Устанавливаем красный бордер по умолчанию
                },
                root: {
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#eeeeee", // Сохраняем красный цвет при наведении
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#eeeeee", // Сохраняем красный цвет при фокусе
                    },
                },
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: '14px',
                    paddingLeft: "17px"
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: "#ededed !important",
                    },
                    "&:hover": {
                        backgroundColor: "#ededed"
                    },
                }
            }
        },
        
    },
});

export default theme;
