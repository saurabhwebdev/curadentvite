import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Calendar } from "@phosphor-icons/react"
import CalendlyEmbed from "./CalendlyEmbed"

const BookingModal = ({ 
  trigger, 
  calendlyUrl = "https://calendly.com/hellocuradent/dental-appointment"
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] h-[90vh] p-0">
        <div className="p-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0">
          <DialogHeader className="flex-row items-center justify-between sm:justify-start gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" weight="duotone" />
              </div>
              <div>
                <DialogTitle className="text-xl">Schedule Your Visit</DialogTitle>
                <DialogDescription className="text-base">
                  Choose a convenient time for your dental appointment
                </DialogDescription>
              </div>
            </div>
            <DialogClose asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-4 top-4 rounded-full h-8 w-8 p-0 hover:bg-accent"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </DialogHeader>
        </div>
        <div className="flex-1 overflow-hidden">
          <CalendlyEmbed url={calendlyUrl} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BookingModal 