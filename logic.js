const DEFAULT_URL_IMAGE = "https://plus.unsplash.com/premium_photo-1661964116252-ef68bf4266af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
const NEW_YORK_URL_IMAGE = "https://images.unsplash.com/photo-1418075285575-c402f1f7340f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"

const TicketStates = {
    CREATED: "CREATED",
    DONE: "DONE"
}

class Ticket {
    title;
    description;
    expectedFinishDate;
    state;
    urlImage;

    constructor(title, description, expectedFinishDate, state, urlImage) {
        this.title = title;
        this.description = description;
        this.expectedFinishDate = expectedFinishDate;
        this.state = state;
        if (urlImage == null) {
            urlImage = DEFAULT_URL_IMAGE;
        }
        this.urlImage = urlImage;
    }

    getHtmlCode() {
        console.log("getHtmlCode");
        var htmlCode = `<div class="p-2">
        <div class="card" style="width: 18rem;">
            <img src="${this.urlImage}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
                <a href="#" class="btn btn-primary">${this.getNextStateButtonTitle()}</a>
            </div>
        </div>
    </div>`;
        return htmlCode;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getExpectedFinishDate() {
        return this.expectedFinishDate;
    }

    getState() {
        return this.state;
    }

    getNextState() {
        switch (this.state) {
            case TicketStates.CREATED:
                return TicketStates.DONE;
            case TicketStates.DONE:
                return TicketStates.CREATED;
        }
    }

    getNextStateButtonTitle() {
        var nextState = this.getNextState();
        switch (nextState) {
            case TicketStates.CREATED:
                return "Return as new task";
            case TicketStates.DONE:
                return "Make done";
        }
    }
}

tickets = [
    new Ticket("Homework", "Do Math task", new Date('2022-12-30T03:24:00'), TicketStates.CREATED, null),
    new Ticket("Sport doing", "Running", new Date('2022-12-12T03:24:00'), TicketStates.DONE, NEW_YORK_URL_IMAGE)
];

console.log("tickets: ", tickets);

function refresh() {
    // TODO
    showCurrentTickets();
}

function showCurrentTickets() {
    console.log("showCurrentTickets");
    document.getElementById("ticketsNew").innerHTML = tickets[0].getHtmlCode();
    document.getElementById("ticketsDone").innerHTML = tickets[1].getHtmlCode();
}

showCurrentTickets();