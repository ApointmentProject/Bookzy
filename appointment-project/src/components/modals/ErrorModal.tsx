import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

interface ErrorModalProps {
    open: boolean;
    handleOpen: () => void;
    title: string;
    message: string;
}

function ErrorModal ({ open, handleOpen, title, message }: ErrorModalProps) {
    return (
        <Dialog
            open={open}
            handler={handleOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader>{ title }</DialogHeader>
            <DialogBody>{ message }</DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="black" onClick={handleOpen}>
                    <span>Accept</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ErrorModal;